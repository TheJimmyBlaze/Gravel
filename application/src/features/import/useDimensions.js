
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
        x, setX: x => setX(Math.max(0, +x)),
        y, setY: y => setY(Math.max(0, +y)),
        width, setWidth: width => setWidth(Math.max(1, +width)),
        height, setHeight: height => setHeight(Math.max(1, +height)),
        rows, setRows: rows => setRows(Math.max(1, +rows)),
        columns, setColumns: columns => setColumns(Math.max(1, +columns)),
        clear
    };
};

export default useDimensions;