
import { useState, useCallback, useEffect } from 'react';
import useInteriorSlicer from './useInteriorSlicer';

export const slicers = {
    //prop: 'slicer_prop',
    //animatedProp: 'slicer_prop_animated',
    interior: useInteriorSlicer()
};

export const stages = {
    slice: 'import_stage_slice',
    configure: 'import_stage_configure'
};

const useImport = (

) => {

    const [stage, setStage] = useState(stages.slice);
    const goConfigure = () => setStage(stages.configure);
    const goSlice = () => setStage(stages.slice);

    const [spriteUrl, setSpriteUrl] = useState();
    const [slicer, setSlicer] = useState();

    const setSlicerByName = name => setSlicer(slicers.first(slicer => slicer.name === name));
    
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [rows, setRows] = useState();
    const [columns, setColumns] = useState();

    const clear = useCallback(() => {
        setSpriteUrl(null);
        setSlicer(slicers.interior);
        setX(0); setY(0);
        setWidth(16); setHeight(16);
        setRows(1); setColumns(1);
    }, [
        setSpriteUrl,
        setSlicer,
        slicers,
        setX, setY,
        setWidth, setHeight,
        setRows, setColumns
    ]);

    useEffect(() => {
        clear();
    }, [ clear ]); 

    const slicerHasDimensions = () => slicer !== slicers.interior;
    const slicerIsAnimated = () => slicer === slicers.animatedProp;

    return {
        stage,
        goConfigure,
        goSlice,
        spriteUrl,
        setSpriteUrl,
        slicer,
        setSlicerByName,
        dimensions: {
            x, setX,
            y, setY,
            width, setWidth,
            height, setHeight,
            rows, setRows,
            columns, setColumns
        },
        slicerHasDimensions,
        slicerIsAnimated,
        clear
    };
};

export default useImport;