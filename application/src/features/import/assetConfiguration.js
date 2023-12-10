
const assetConfiguration = (
    x, y,
    slice
) => {

    let id = '';
    let tagString = slice.tags.join(', ');
    let frames = 1;

    const dimensions = {
        x: x + slice.x,
        y: y + slice.y,
        width: slice.width,
        height: slice.height
    };

    const getTags = config => config.tagString.split(',').map(tag => tag.trim().toLowerCase());

    return {
        id,
        tagString,
        frames,
        dimensions,
        getTags
    };
};

export default assetConfiguration;