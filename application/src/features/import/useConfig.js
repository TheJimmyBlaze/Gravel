
import { useState, useEffect } from 'react';

const useConfig = (
    x, y,
    slice,
    spriteUrl,
    updateAsset
) => {

    const [id, setId] = useState('');
    const [frames, setFrames] = useState(1);

    const [tagString, setTagString] = useState('');
    const [tags, setTags] = useState([]);

    const dimensions = {
        x: x + slice.x,
        y: y + slice.y,
        width: slice.width,
        height: slice.height
    };

    const update = callback => {
        callback();
        updateAsset(createAsset());
    };
    const createAsset = () => ({
        id,
        frames,
        tags,
        dimensions,
        spriteUrl
    });

    useEffect(() => {
        const rawTags = tagString.split(',');
        setTags(rawTags.map(tag => tag.trim().toLowerCase()))
    }, [
        tagString,
        setTags
    ]);

    useEffect(() => {

        if (slice.tags.length === 0) return;

        setTags(slice.tags);
        setTagString(slice.tags.join(', '));
    }, [
        setTags,
        setTagString,
        slice
    ]);

    return {
        id, setId: id => update(() => setId(id)),
        frames, setFrames: frames => update(() => setFrames(frames)),
        tagString, setTagString: tagString => update(() => setTagString(tagString)),
        tags,
        dimensions,
        spriteUrl,
        createAsset
    };
};

export default useConfig;