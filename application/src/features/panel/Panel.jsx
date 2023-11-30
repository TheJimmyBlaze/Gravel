
import Inspector from '../inspector/Inspector';
import Layers from '../layers/Layers';

const Panel = ({

}) => {

    return (
        <div 
            className="d-flex flex-column flex-grow-1 border-end border-secondary" 
            style={{width: "256px"}}
        >
            <div className="mb-auto">
                <Layers />
            </div>

            <Inspector />
        </div>
    );
};

export default Panel;