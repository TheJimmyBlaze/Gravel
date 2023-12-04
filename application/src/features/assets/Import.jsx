
import { useState } from 'react';
import { NavDropdown, Modal, Form, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';

import useImport, { slicers } from './useImport';

import onlyNumbers from '../../lib/onlyNumbers';

const Import = ({

}) => {

  const {
    slicer,
    setSlicer,
    dimensions,
    slicerHasDimensions,
    clear
  } = useImport();

  const [show, setShow] = useState(false);
  const handleClose = () => { clear(); setShow(false); }
  const handleShow = () => setShow(true);

  return (
    <>
      <NavDropdown.Item onClick={handleShow}>
        import
      </NavDropdown.Item>

      <Modal 
        backdrop="static"
        show={show} 
        onHide={handleClose} 
        size="lg"
        data-bs-theme="dark"
      >

        <Modal.Header>
          <h4>Import assets from sprite sheet</h4>
        </Modal.Header>
        
        <Modal.Body>

          <Container fluid>

            <Row className="g-2">
              <Col xs={12}>
                <Form.Control type="file"/>
              </Col>

              <Col xs={12}>

                <Form.Select
                  onChange={e => setSlicer(e.target.value)}
                  value={slicer}
                >
                  <option value={slicers.prop}>Prop slicer</option>
                  <option value={slicers.animatedProp}>Animated prop slicer</option>
                  <option value={slicers.interior}>Interior slicer</option>
                </Form.Select>
              </Col>

              <Col xs={12} className="p-2"/>

              <Col xs={3}>
                <InputGroup>
                  <InputGroup.Text>x</InputGroup.Text>
                  <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => dimensions.setX(e.target.value)}
                    value={dimensions.x}
                  />
                </InputGroup>
              </Col>

              <Col xs={3}>
                <InputGroup>
                  <InputGroup.Text>y</InputGroup.Text>
                  <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => dimensions.setY(e.target.value)}
                    value={dimensions.y}
                  />
                </InputGroup>
              </Col>

              <Col xs={3}>
                <InputGroup>
                  <InputGroup.Text>w</InputGroup.Text>
                  <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => dimensions.setWidth(e.target.value)}
                    value={dimensions.width}
                    disabled={!slicerHasDimensions()}
                  />
                </InputGroup>
              </Col>

              <Col xs={3}>
                <InputGroup>
                  <InputGroup.Text>h</InputGroup.Text>
                  <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => dimensions.setHeight(e.target.value)}
                    value={dimensions.height}
                    disabled={!slicerHasDimensions()}
                  />
                </InputGroup>
              </Col>

              <Col xs={6}>
                <InputGroup>
                  <InputGroup.Text>rows</InputGroup.Text>
                  <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => dimensions.setRows(e.target.value)}
                    value={dimensions.rows}
                  />
                </InputGroup>
              </Col>
              
              <Col xs={6}>
                <InputGroup>
                  <InputGroup.Text>columns</InputGroup.Text>
                  <Form.Control
                    type="number"
                    onKeyDown={e => onlyNumbers(e)}
                    onChange={e => dimensions.setColumns(e.target.value)}
                    value={dimensions.columns}
                  />
                </InputGroup>
              </Col>

              <Col xs={12} className="p-2"/>

              <Col xs={12}>

                <div style={{height: '512px'}} className="d-flex flex-grow-1 justify-content-center">
                    <canvas 
                        style={{backgroundColor: "Maroon"}}
                    />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Container>
            <Row>

              <Col xs={6}>
                <Button variant="danger" onClick={handleClose}>Cancel</Button>
              </Col>
              <Col xs={6}>
                <Button variant="primary" className="w-100" onClick={() => console.log(slicer)}>Slice</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Import;