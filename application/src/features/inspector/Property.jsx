
import { Row, Col } from 'react-bootstrap';

import './inspector.css';

const Property = ({
    Key,
    Value
}) => {

    return (
        <Row className="m-2 g-0 fs-7 property">
            <Col xs={3}>
                <p className="me-2">{`${Key}:`}</p>
            </Col>
            <Col xs={9}>
                <p className="text-white">{Value}</p>
            </Col>
        </Row>
    );
};

export default Property;