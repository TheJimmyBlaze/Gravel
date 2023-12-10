
import {makeSlice} from './slicer';

const interiorSlicer = () => {

    const name = 'slicer_interior';
    const tags = ['interior'];

    const hasDimensions = false;
    const hasRows = false;
    const hasColumns = false;
    const isAnimated = false;

    const getSlices = () => [
        makeSlice('top_left_inner', ['top', 'left', 'top-left', 'inner', 'tli'], 16, 8, 8, 8),
        makeSlice('top_single', ['top', 'single', 'ts'], 24, 8, 16, 40),
        makeSlice('top_right_inner', ['top', 'right', 'top-right', 'inner', 'tri'], 40, 8, 8, 8),
        makeSlice('left_single', ['left', 'single', 'ls'], 16, 16, 8, 16),
        makeSlice('left_double', ['left', 'double', 'ld'], 16, 16, 8, 32),
        makeSlice('right_single', ['right', 'single', 'rs'], 40, 16, 8, 16),
        makeSlice('right_double', ['right', 'double', 'rd'], 40, 16, 8, 32),
        makeSlice('bottom_left_inner', ['bottom', 'left', 'bottom-left', 'inner', 'bli'], 16, 48, 8, 8),
        makeSlice('bottom_single', ['bottom', 'single', 'bs'], 24, 48, 16, 8),
        makeSlice('bottom_right_inner', ['bottom', 'right', 'bottom-right', 'inner', 'bri'], 40, 48, 8, 8),

        makeSlice('top_right_outer', ['top', 'right', 'top-right', 'outer', 'tro'], 56, 8, 8, 8),
        makeSlice('top_left_outer', ['top', 'left', 'top-left', 'outer', 'tlo'], 64, 8, 8, 8),
        makeSlice('bottom_right_outer', ['bottom', 'right', 'bottom-right', 'outer', 'bro'], 56, 16, 8, 40),
        makeSlice('bottom_left_outer', ['bottom', 'left', 'bottom-left', 'outer', 'blo'], 64, 16, 8, 40),

        makeSlice('top_double', ['top', 'double', 'td'], 80, 8, 32, 40),
        makeSlice('bottom_double', ['bottom', 'double', 'bd'], 80, 48, 32, 8)
    ];

    const drawPreview = (ctx, dimensions) => {

        getSlices().forEach(slice => {
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

export default interiorSlicer;