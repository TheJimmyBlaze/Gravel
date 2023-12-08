
import { useState } from 'react';
import { NavDropdown, Modal, Form, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';

import useImport from './useImport';
import Slice from './Slice';

const Import = ({

}) => {

  const importer = useImport();

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
          <Slice 
            importer={importer}
          />
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Container>
            <Row>

              <Col xs={6}>
                <Button variant="danger" onClick={handleClose}>Cancel</Button>
              </Col>
              <Col xs={6}>
                <Button variant="primary" className="w-100" onClick={() => console.log(importer.slicer)}>Slice</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Import;