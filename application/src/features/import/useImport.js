
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

    const [configurations, setConfigurations] = useState([]);

    const [spriteUrl, setSpriteUrl] = useState();
    const [slicer, setSlicer] = useState();

    const setSlicerByName = name => setSlicer(slicers.first(slicer => slicer.name === name));

    const dimensions = useDimensions();

    const clear = useCallback(() => {

        setSpriteUrl(null);
        setSlicer(slicers.interior);

        dimensions.clear();
    }, [
        setSpriteUrl,
        setSlicer,
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
        dimensions,
        clear
    };
};

export default useImport;