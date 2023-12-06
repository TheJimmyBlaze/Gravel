
import { useState } from 'react';
import useInteriorSlicer from './useInteriorSlicer';

export const slicers = {
    //prop: 'slicer_prop',
    //animatedProp: 'slicer_prop_animated',
    interior: useInteriorSlicer()
};

const useImport = (

) => {

    const [slicer, setSlicer] = useState(slicers.interior);

    const setSlicerByName = name => setSlicer(slicers.first(slicer => slicer.name === name));
    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [width, setWidth] = useState(16);
    const [height, setHeight] = useState(16);
    const [rows, setRows] = useState(1);
    const [columns, setColumns] = useState(1);

    const clear = () => {
        setSlicer(slicers.prop);
        setX(0); setY(0);
        setWidth(16); setHeight(16);
        setRows(1); setColumns(1);
    };

    const slicerHasDimensions = () => slicer !== slicers.interior;
    const slicerIsAnimated = () => slicer === slicers.animatedProp;

    return {
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