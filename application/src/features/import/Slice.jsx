
import { Form, InputGroup, Container, Row, Col } from 'react-bootstrap';

import { slicers } from './useImport';

import onlyNumbers from '../../lib/onlyNumbers';
import SlicePreview from './SlicePreview';

const Slice = ({
    importer
}) => {

    return (
        <Container fluid>

            <Row className="g-2">
                <Col xs={12}>
                <Form.Control 
                    type="file"
                    onChange={e => {
                        if (!e.target.files || e.target.files.length === 0) {
                            return importer.setSpriteUrl(null);
                        }
                        importer.setSpriteUrl(e.target.files[0]);
                    }}
                />
                </Col>

                <Col xs={12}>

                <Form.Select
                    onChange={e => importer.setSlicerByName(e.target.value)}
                    value={importer.slicer?.name}
                >
                    {/* <option value={slicers.prop.name}>Prop slicer</option>
                    <option value={slicers.animatedProp.name}>Animated prop slicer</option> */}
                    <option value={slicers.interior.name}>Interior slicer</option>
                </Form.Select>
                </Col>

                <Col xs={12} className="p-2"/>

                <Col xs={3}>
                <InputGroup>
                    <InputGroup.Text>x</InputGroup.Text>
                    <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => importer.dimensions.setX(e.target.value)}
                    value={importer.dimensions.x}
                    />
                </InputGroup>
                </Col>

                <Col xs={3}>
                <InputGroup>
                    <InputGroup.Text>y</InputGroup.Text>
                    <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => importer.dimensions.setY(e.target.value)}
                    value={importer.dimensions.y}
                    />
                </InputGroup>
                </Col>

                <Col xs={3}>
                <InputGroup>
                    <InputGroup.Text>w</InputGroup.Text>
                    <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => importer.dimensions.setWidth(e.target.value)}
                    value={importer.dimensions.width}
                    disabled={!importer.slicerHasDimensions()}
                    />
                </InputGroup>
                </Col>

                <Col xs={3}>
                <InputGroup>
                    <InputGroup.Text>h</InputGroup.Text>
                    <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => importer.dimensions.setHeight(e.target.value)}
                    value={importer.dimensions.height}
                    disabled={!importer.slicerHasDimensions()}
                    />
                </InputGroup>
                </Col>

                <Col xs={6}>
                <InputGroup>
                    <InputGroup.Text>rows</InputGroup.Text>
                    <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => importer.dimensions.setRows(e.target.value)}
                    value={importer.dimensions.rows}
                    />
                </InputGroup>
                </Col>
                
                <Col xs={6}>
                <InputGroup>
                    <InputGroup.Text>columns</InputGroup.Text>
                    <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => importer.dimensions.setColumns(e.target.value)}
                    value={importer.dimensions.columns}
                    />
                </InputGroup>
                </Col>

                <Col xs={12} className="p-2"/>

                <Col xs={12}>
                    <SlicePreview 
                    spriteUrl={importer.spriteUrl}
                    slicer={importer.slicer}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Slice;