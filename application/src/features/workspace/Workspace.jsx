
import {useRef, useCallback, useEffect} from 'react';

const Workspace = ({

}) => {

    const canvasRef = useRef();

    const resizeToParent = useCallback(() => {

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const parentWidth = canvas.parentElement.clientWidth;
        const parentHeight = canvas.parentElement.clientHeight;

        ctx.width = parentWidth;
        ctx.height = parentHeight;
        canvas.style = `width:${parentWidth}px;height:${parentHeight}px;`;
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
        <div className="d-flex flex-grow-1 bg-black">
            <canvas ref={canvasRef}/>
        </div>
    );
};

export default Workspace;