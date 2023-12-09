
import { useRef, useCallback, useEffect } from 'react';

const AssetPreview = ({

}) => {

    const canvasRef = useRef();

    const drawPreview = canvas => {

    };

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

export default AssetPreview;