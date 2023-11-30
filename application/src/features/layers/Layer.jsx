
import './layer.css';

const Layer = ({
    Name,
    Count,
    Selected
}) => {

    return (
        <div className={`p-2 d-flex justify-content-between layer ${Selected && "selected"}`}>
            <p>{Name}</p>
            <p>{Count}</p>
        </div>
    );
};

export default Layer;