
import Inspector from '../inspector/inspector';
import Layers from '../layers/layers';

const Panel = ({

}) => {

    return (
        <div 
            className="d-flex flex-column flex-grow-1 border-end border-secondary" 
            style={{width: "200px"}}
        >
            <div className="mb-auto">
                <Layers />
            </div>

            <Inspector />
        </div>
    );
};

export default Panel;