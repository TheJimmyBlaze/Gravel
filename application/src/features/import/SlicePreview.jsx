
import { useRef, useCallback, useEffect } from 'react';

const SlicePreview = ({

}) => {

    const canvasRef = useRef();

    const resizeToParent = useCallback(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const parentWidth = canvas.parentElement.clientWidth;
        const parentHeight = canvas.parentElement.clientHeight;

        ctx.width = parentWidth;
        ctx.height = parentHeight;
        canvas.style = `width:${parentWidth}px;height:${parentHeight}px;`;

        console.log(`${ctx.width}, ${ctx.height}`);
    }, [
        canvasRef
    ]);

    useEffect(() => {

        resizeToParent();
    }, [
        resizeToParent
    ]);

    window.addEventListener('resize', () => resizeToParent());

    return (

        <div style={{height: '320px', backgroundColor: "Maroon"}} className="d-flex flex-grow-1">
            <canvas 
                ref={canvasRef}
            />
        </div>
    );
};

export default SlicePreview;