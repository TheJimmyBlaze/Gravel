
import { useState, useCallback, useEffect } from 'react';
import useInteriorSlicer from './useInteriorSlicer';
import useDimensions from './useDimensions';

export const slicers = {
    //prop: 'slicer_prop',
    //animatedProp: 'slicer_prop_animated',
    interior: useInteriorSlicer()
};

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
    const setSlicerByName = name => setSlicer(slicers.first(slicer => slicer.name === name));

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
        return Object.values(assetConfigs).length === slicer.slices.length && invalidAssets.length === 0;
    }, [assetConfigs]);

    const dimensions = useDimensions();

    const clear = useCallback(() => {

        setSpriteUrl(null);
        setSlicer(slicers.interior);
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
        assetConfigs,
        getAssetConfig,
        updateAssetConfig,
        dimensions,
        clear,
        canImport
    };
};

export default useImport;