
import {makeSlice} from './slicer';

const floorSlicer = () =>  {

    const name = 'slicer_floor';
    const tags = ['floor'];

    const hasDimensions = true;
    const hasRows = true;
    const hasColumns = true;
    const isAnimated = false;

    const getSlices = ({
        x,
        y,
        width,
        height,
        rows,
        columns,
    }) => {

        const slices = [];
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {

                const slice = makeSlice(
                    `floor_${row}_${column}`,
                    [],
                    x + column * width,
                    y + row * height,
                    width,
                    height
                );
                slices.push(slice);
            }
        }

        return slices;
    };

    const drawPreview = (ctx, dimensions) => {

        getSlices(dimensions).forEach(slice => {
            ctx.rect(
                slice.x + dimensions.x, 
                slice.y + dimensions.y, 
                slice.width,
                slice.height
            );
        });
    };

    return {
        name,
        tags,
        getSlices,
        hasDimensions,
        hasRows,
        hasColumns,
        isAnimated,
        drawPreview
    };
};

export default floorSlicer;