
import { Container, Row, Col, InputGroup, Form, Carousel } from 'react-bootstrap';
import onlyNumbers from '../../lib/onlyNumbers';
import AssetPreview from './AssetPreview';

const Configure = ({
    importer
}) => {

    return (
        <Container>
            <Row className="g-2">

                <Col xs={12} className="text-end">
                    Sprite <span className="text-primary">{1}</span>{` of ${1}`}
                </Col>

                <Col xs={12}>
                    <InputGroup>
                        <InputGroup.Text>Name</InputGroup.Text>
                        <Form.Control
                            type="text"
                        />
                    </InputGroup>
                </Col>

                <Col xs={9}>
                    <InputGroup>
                        <InputGroup.Text>Tags</InputGroup.Text>
                        <Form.Control
                            type="text"
                        />
                    </InputGroup>
                </Col>

                <Col xs={3}>
                    <InputGroup>
                        <InputGroup.Text>Frames</InputGroup.Text>
                        <Form.Control
                            type="number"
                            onKeyDown={e => onlyNumbers(e)}
                            disabled={!importer.slicer.isAnimated}
                        />
                    </InputGroup>
                </Col>

                <Col xs={12}>
                    <AssetPreview />
                </Col>
            </Row>
        </Container>
    );
};

export default Configure;