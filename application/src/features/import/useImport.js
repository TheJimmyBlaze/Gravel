
import { useState, useCallback, useEffect } from 'react';
import useDimensions from './useDimensions';

import { slicers } from './slicers/slicer';

export const stages = {
    slice: 'import_stage_slice',
    configure: 'import_stage_configure'
};

const useImport = (

) => {

    const [stage, setStage] = useState(stages.slice);
    const goConfigure = () => setStage(stages.configure);
    const goSlice = () => setStage(stages.slice);

    const [spriteUrl, setSpriteUrl] = useState(null);

    const [slicer, setSlicer] = useState(null);
    const setSlicerByName = name => {
        const newSlicer = Object.values(slicers).find(slicer => slicer.name === name);
        setSlicer(newSlicer);
    };

    const [tagString, setTagString] = useState('');
    const getTags = useCallback(() => (
        tagString.split(',').map(tag => tag.trim().toLowerCase())
    ), [tagString]);

    const [assetConfigs, setAssetConfigs] = useState({});
    
    const getAssetConfig = useCallback(index => assetConfigs[index], [ assetConfigs ]);
    const updateAssetConfig = useCallback((index, config) => {
        
        const newConfigs = {...assetConfigs};
        newConfigs[index] = config;
        setAssetConfigs(newConfigs);
    }, [
        assetConfigs, 
        setAssetConfigs
    ]);

    const canImport = useCallback(() => {
        const invalidAssets = Object.values(assetConfigs).filter(asset => !asset.id.trim());
        return Object.values(assetConfigs).length === slicer.getSlices(dimensions).length && invalidAssets.length === 0;
    }, [assetConfigs]);

    const dimensions = useDimensions();

    const clear = useCallback(() => {

        setSpriteUrl(null);
        setTagString('');
        setSlicer(slicers.prop);
        setAssetConfigs({});

        dimensions.clear();
    }, [
        setSpriteUrl,
        setSlicer,
        setAssetConfigs,
        slicers,
    ]);

    useEffect(() => {
        clear();
    }, [ clear ]); 

    return {
        stage,
        goConfigure,
        goSlice,
        spriteUrl,
        setSpriteUrl,
        slicer,
        setSlicerByName,
        tagString,
        setTagString,
        getTags,
        assetConfigs,
        getAssetConfig,
        updateAssetConfig,
        dimensions,
        clear,
        canImport
    };
};

export default useImport;