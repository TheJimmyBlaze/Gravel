
import { Container, Row, Col, InputGroup, Form, Badge } from 'react-bootstrap';
import onlyNumbers from '../../lib/onlyNumbers';
import AssetPreview from './AssetPreview';
import useConfig from './useConfig';

const Configure = ({
    index,
    importer
}) => {

    const config = useConfig(
        importer.dimensions.x, importer.dimensions.y,
        importer.slicer.slices[index],
        importer.spriteUrl
    )

    return (
        <Container>
            <Row className="g-2">

                <Col xs={12} className="text-end">
                    Sprite <span className="text-primary">{index + 1}</span>{` of ${importer.slicer.slices.length}`}
                </Col>

                <Col xs={6}>
                    <InputGroup>
                        <InputGroup.Text>Name</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Missing Name"
                            onChange={e => config.setName(e.target.value)}
                            value={config.name}
                            isInvalid={!config.name.trim()}
                        />
                    </InputGroup>
                </Col>

                <Col xs={6}>
                    <InputGroup>
                        <InputGroup.Text>Id</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="missing_id"
                            onChange={e => config.setId(e.target.value)}
                            value={config.id}
                            isInvalid={!config.id.trim()}
                        />
                    </InputGroup>
                </Col>

                <Col xs={9}>
                    <InputGroup>
                        <InputGroup.Text>Tags</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="red, vector"
                            onChange={e => config.setTagString(e.target.value)}
                            value={config.tagString}
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
                            onChange={e => config.setFrames(e.target.value)}
                            value={config.frames}
                        />
                    </InputGroup>
                </Col>

                <Col xs={12}>
                    {
                        config.tags.map(tag => (
                            <Badge bg="info" className="me-2">{tag}</Badge>
                        ))
                    }
                </Col>

                <Col xs={12}>
                    <AssetPreview />
                </Col>
            </Row>
        </Container>
    );
};

export default Configure;