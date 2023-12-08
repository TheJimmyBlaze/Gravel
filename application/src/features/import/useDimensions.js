
import { useState, useCallback } from 'react';

const useDimensions = (

) => {
    
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [rows, setRows] = useState();
    const [columns, setColumns] = useState();

    const clear = useCallback(() => {
        setX(0); setY(0);
        setWidth(16); setHeight(16);
        setRows(1); setColumns(1);
    }, [
        setX, setY,
        setWidth, setHeight,
        setRows, setColumns
    ]);

    return {
        x, setX: x => setX(+x),
        y, setY: y => setY(+y),
        width, setWidth: width => setWidth(+width),
        height, setHeight: height => setHeight(+height),
        rows, setRows: rows => setRows(+rows),
        columns, setColumns: columns => setColumns(+columns),
        clear
    };
};

export default useDimensions;