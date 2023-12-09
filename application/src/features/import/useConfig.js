
import { useState, useEffect } from 'react';

const useConfig = (

) => {

    const [name, setName] = useState();
    const [tagString, setTagString] = useState();

    const [tags, setTags] = useState([]);

    useEffect(() => {
        const rawTags = tagString.split(',');
        setTags(rawTags.select(tag => tag.trim().toLowerCase()))
    }, [
        tagString,
        setTags
    ]);

    return {
        name,
        setName,
        tagString,
        setTagString,
        tags
    };
};

export default useConfig;