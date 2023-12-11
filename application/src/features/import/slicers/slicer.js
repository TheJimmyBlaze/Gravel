
import propSlicer from './propSlicer';
import animatedSlicer from './animatedSlicer';
import floorSlicer from './floorSlicer';
import interiorSlicer from './interiorSlicer';

export const makeSlice = (name, tags, x, y, width, height) => ({name, tags, x, y, width, height});

export const slicers = {
    prop: propSlicer(),
    animated: animatedSlicer(),
    floor: floorSlicer(),
    interior: interiorSlicer()
};