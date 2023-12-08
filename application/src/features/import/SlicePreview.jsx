
import { useState, useRef, useCallback, useEffect } from 'react';

const SlicePreview = ({
    spriteUrl,
    slicer
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

    const drawPreview = useCallback(canvas => {

        if (!slicer || !sprite) return;

        //Setup
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = ctx.strokeStyle = '#FCA314';

        const scale = 4;
        ctx.translate(
            canvas.width / 2 - slicer.dimensions.width * scale / 2, 
            canvas.height / 2 - slicer.dimensions.height * scale / 2
        );
        ctx.scale(scale, scale);

        //Draw image
        ctx.drawImage(sprite, 0, 0);

        //Draw slicer
        slicer.drawPreview(ctx);
        ctx.stroke();
    }, [
        sprite,
        slicer
    ]);

    const resizeToParent = useCallback(() => {

        const canvas = canvasRef.current;
        if (!canvas) return;

        const parentWidth = canvas.parentElement.clientWidth;
        const parentHeight = canvas.parentElement.clientHeight;

        canvas.width = parentWidth;
        canvas.height = parentHeight;
        canvas.style = `width:${parentWidth}px;height:${parentHeight}px;`;

        drawPreview(canvas);
    }, [
        slicer,
        canvasRef,
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

export default SlicePreview;