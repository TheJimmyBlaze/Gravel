
import {makeSlice} from './slicer';

const animatedSlicer = () =>  {

    const name = 'slicer_animated';
    const tags = ['animated'];

    const hasDimensions = true;
    const hasRows = true;
    const hasColumns = false;
    const isAnimated = true;

    const getSlices = ({
        x,
        y,
        width,
        height,
        rows,
    }) => {

        const slices = [];
        for (let row = 0; row < rows; row++) {

            const slice = makeSlice(
                `animated_${row}`,
                [],
                x,
                y + row * width,
                width,
                height
            );
            slices.push(slice);
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

export default animatedSlicer;