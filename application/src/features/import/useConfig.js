
import { useState, useEffect } from 'react';

const useConfig = (
    x, y,
    slice,
    spriteUrl
) => {

    const [name, setName] = useState('');
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

    const valid = () => (name.trim() && id.trim());
    const createAsset = () => ({
        name,
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
        name, setName,
        id, setId,
        frames, setFrames,
        tagString, setTagString,
        tags,
        dimensions,
        spriteUrl,
        valid,
        createAsset
    };
};

export default useConfig;