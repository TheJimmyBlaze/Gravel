
import Layer from './Layer';

const Layers = ({

}) => {

    return (
        <div className="d-flex flex-column w-100">

            <Layer Name="Floor" Count={0} Selected />
            <Layer Name="Walls" Count={0} />
            <Layer Name="Props" Count={0} />

            <hr />

            <Layer Name="Collision" Count={0} />
        </div>
    );
};

export default Layers;