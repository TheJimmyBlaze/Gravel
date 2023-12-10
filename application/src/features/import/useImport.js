
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
    const goConfigure = () => setStage(stages.configure, setAssets({}));
    const goSlice = () => setStage(stages.slice);

    const [spriteUrl, setSpriteUrl] = useState(null);

    const [slicer, setSlicer] = useState(null);
    const setSlicerByName = name => setSlicer(slicers.first(slicer => slicer.name === name));

    const [assets, setAssets] = useState({});
    const updateAsset = (index, asset) => {
        assets[index] = asset;
        setAssets({...assets});
    }
    const canImport = useCallback(() => {
        const invalidAssets = Object.values(assets).filter(asset => !asset.id.trim());
        return Object.values(assets).length === slicer.slices.length && invalidAssets.length === 0;
    }, [ assets ]);

    const dimensions = useDimensions();

    const clear = useCallback(() => {

        setSpriteUrl(null);
        setSlicer(slicers.interior);
        setAssets({});

        dimensions.clear();
    }, [
        setSpriteUrl,
        setSlicer,
        setAssets,
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
        assets,
        updateAsset,
        dimensions,
        clear,
        canImport
    };
};

export default useImport;