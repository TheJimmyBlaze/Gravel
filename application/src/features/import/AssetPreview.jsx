
import { useRef, useCallback, useEffect, useState } from 'react';

const AssetPreview = ({
    spriteUrl,
    dimensions,
    frames = 1,
    fps = 8
}) => {

    const [sprite, setSprite] = useState();

    const canvasRef = useRef();
    
    useEffect(() => {

        if (!spriteUrl) return setSprite(null);

        const imageUrl = URL.createObjectURL(spriteUrl)

        const image = new Image();
        image.src = imageUrl;
        image.onload = () => setSprite(image);

        return () => URL.revokeObjectURL(imageUrl)
    }, [
        spriteUrl,
        setSprite
    ]);

    let currentFrame = 0;
    let lastFrameChange = 0;

    const drawPreview = useCallback(timestamp => {

        if (!sprite || !dimensions) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        //Setup
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //Draw image
        ctx.drawImage(
            sprite,
            dimensions.x + (dimensions.width * currentFrame), 
            dimensions.y,
            dimensions.width, dimensions.height,
            0, 0,
            dimensions.width, dimensions.height
        );

        if (frames > 1) {

            const frameInterval = 1000 / fps;
            if (lastFrameChange + frameInterval < timestamp) {

                currentFrame++;
                if (currentFrame >= frames) {
                    currentFrame = 0;
                }
            
                lastFrameChange = timestamp;
            }

            requestAnimationFrame(drawPreview);
        }
    }, [
        sprite,
        dimensions,
        frames,
        fps
    ]);
    drawPreview(0);

    const resizeToParent = useCallback(() => {

        const canvas = canvasRef.current;
        if (!canvas) return;

        const parentWidth = canvas.parentElement.clientWidth;
        const parentHeight = canvas.parentElement.clientHeight;

        canvas.width = parentWidth;
        canvas.height = parentHeight;
        canvas.style = `width:${parentWidth}px;height:${parentHeight}px;`;

        //Setup
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        const scale = 4;
        ctx.translate(
            (canvas.width / 2) - (dimensions?.width * scale / 2), 
            (canvas.height / 2) - (dimensions?.height * scale / 2)
        );
        ctx.scale(scale, scale);

        drawPreview(0);
    }, [
        canvasRef,
        dimensions,
        drawPreview
    ]);

    useEffect(() => {
        resizeToParent();
    }, [
        resizeToParent,
    ]);

    window.addEventListener('resize', () => resizeToParent());

    return (

        <div style={{height: '320px'}} className="d-flex flex-grow-1 bg-dark">
            <canvas ref={canvasRef}/>
        </div>
    );
};

export default AssetPreview;