
import { useState } from 'react';

const useAssets = (

) => {

    const [assets, setAssets] = useState([]);

    const registerAsset = asset => setAssets([...assets, asset]);

    return {
        assets,
        registerAsset
    };
};

export default useAssets;s