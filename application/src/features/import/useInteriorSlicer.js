
const makeSlice = (name, tags, x, y, width, height) => ({name, tags, x, y, width, height});

const useInteriorSlicer = () => {

    const name = 'slicer_interior';

    const dimensions = {
        width: 128,
        height: 64
    };

    const hasDimensions = false;
    const hasRows = false;
    const hasColumns = false;
    const isAnimated = false;

    const slices = [
        makeSlice('top_left_inner', ['top', 'left', 'top-left', 'inner'], 16, 8, 8, 8),
        makeSlice('top_single', ['top', 'single'], 24, 8, 16, 40),
        makeSlice('top_right_inner', ['top', 'right', 'top-right', 'inner'], 40, 8, 8, 8),
        makeSlice('left_single', ['left', 'single'], 16, 16, 8, 16),
        makeSlice('left_double', ['left', 'double'], 16, 16, 8, 32),
        makeSlice('right_single', ['right', 'single'], 40, 16, 8, 16),
        makeSlice('right_double', ['right', 'double'], 40, 16, 8, 32),
        makeSlice('bottom_left_inner', ['bottom', 'left', 'bottom-left', 'inner'], 16, 48, 8, 8),
        makeSlice('bottom_single', ['bottom', 'single'], 24, 48, 16, 8),
        makeSlice('bottom_right_inner', ['bottom', 'right', 'bottom-right', 'inner'], 40, 48, 8, 8),

        makeSlice('top_right_outer', ['top', 'right', 'top-right', 'outer'], 56, 8, 8, 8),
        makeSlice('top_left_outer', ['top', 'left', 'top-left', 'outer'], 64, 8, 8, 8),
        makeSlice('bottom_right_outer', ['bottom', 'right', 'bottom-right', 'outer'], 56, 16, 8, 40),
        makeSlice('bottom_left_outer', ['bottom', 'left', 'bottom-left', 'outer'], 64, 16, 8, 40),

        makeSlice('top_double', ['top', 'double'], 80, 8, 32, 40),
        makeSlice('bottom_double', ['bottom', 'double'], 80, 48, 32, 8)
    ];

    const drawPreview = (ctx, dimensions) => {

        slices.forEach(slice => {
            ctx.rect(slice.x + dimensions.x, slice.y + dimensions.y, slice.width, slice.height);
        });
    };

    return {
        name,
        slices,
        dimensions,
        hasDimensions,
        hasRows,
        hasColumns,
        isAnimated,
        drawPreview
    };
};

export default useInteriorSlicer;