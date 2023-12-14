
const assetConfiguration = (
    x, y,
    slice,
    tags
) => {

    let id = '';
    let tagString = tags;
    let frames = 1;
    let fps = 8;

    const dimensions = {
        x: x + slice.x,
        y: y + slice.y,
        width: slice.width,
        height: slice.height
    };

    const getTags = config => config.tagString.split(',').map(tag => tag.trim().toLowerCase());

    return {
        id,
        dimensions,
        tagString,
        frames,
        fps,
        getTags
    };
};

export default assetConfiguration;