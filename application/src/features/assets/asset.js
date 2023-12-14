
const asset = (
    spriteId,
    assetConfiguration
) => {

    const {
        id,
        spriteId,
        dimensions,
        frames,
        fps
    } = assetConfiguration;

    const tags = assetConfiguration.getTags();

    return {
        id,
        spriteId,
        tags,
        dimensions,
        frames,
        fps
    };
};

export default asset;