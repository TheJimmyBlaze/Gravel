
const makeSlice = (name, x, y, width, height) => ({name, x, y, width, height});

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
        makeSlice('top_left_inner', 16, 8, 8, 8),
        makeSlice('top_single', 24, 8, 16, 40),
        makeSlice('top_right_inner', 40, 8, 8, 8),
        makeSlice('left_single', 16, 16, 8, 16),
        makeSlice('left_double', 16, 16, 8, 32),
        makeSlice('right_single', 40, 16, 8, 16),
        makeSlice('right_double', 40, 16, 8, 32),
        makeSlice('bottom_left_inner', 16, 48, 8, 8),
        makeSlice('bottom_single', 24, 48, 16, 8),
        makeSlice('bottom_right_inner', 40, 48, 8, 8),

        makeSlice('top_right_outer', 56, 8, 8, 8),
        makeSlice('top_left_outer', 64, 8, 8, 8),
        makeSlice('bottom_right_outer', 56, 16, 8, 40),
        makeSlice('bottom_left_outer', 64, 16, 8, 40),

        makeSlice('top_double', 80, 8, 32, 40),
        makeSlice('bottom_double', 80, 48, 32, 8)
    ];

    const drawPreview = (ctx, dimensions) => {

        slices.forEach(slice => {
            ctx.rect(slice.x + dimensions.x, slice.y + dimensions.y, slice.width, slice.height);
        });
    };

    return {
        name,
        dimensions,
        hasDimensions,
        hasRows,
        hasColumns,
        isAnimated,
        drawPreview
    };
};

export default useInteriorSlicer;