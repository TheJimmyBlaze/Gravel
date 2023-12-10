
import propSlicer from './propSlicer';
import interiorSlicer from './interiorSlicer';

export const makeSlice = (name, tags, x, y, width, height) => ({name, tags, x, y, width, height});

export const slicers = {
    prop: propSlicer(),
    interior: interiorSlicer()
};