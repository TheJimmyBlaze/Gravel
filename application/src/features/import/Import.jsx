
import { useState } from 'react';
import { NavDropdown, Modal, Form, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';

import useImport, { stages } from './useImport';
import Slice from './Slice';
import Configure from './Configure';

const Import = ({

}) => {

  const importer = useImport();
  const {
    stage,
    goConfigure,
    goSlice,
    clear
  } = importer;

  const [show, setShow] = useState(false);
  const handleClose = () => { clear(); setShow(false); }
  const handleShow = () => setShow(true);

  const renderStage = () => {

    if (stage === stages.slice) return <Slice importer={importer} />
    if (stage === stages.configure) return <Configure importer={importer} />
  };

  const renderBackButton = () => {

    if (stage === stages.slice) return (
      <Button variant="danger" onClick={handleClose}>Cancel</Button>
    );

    if (stage === stages.configure) return (
      <Button variant="danger" onClick={goSlice}>Back</Button>
    );
  };

  const renderNextButton = () => {
    
    if (stage === stages.slice) return (
      <Button variant="primary" className="w-100" onClick={goConfigure}>Slice</Button>
    );

    if (stage === stages.configure) return (
      <Button variant="primary" className="w-100">Import</Button>
    );
  };

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
          { renderStage() }
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Container>
            <Row>

              <Col xs={6}>
                { renderBackButton() }
              </Col>
              <Col xs={6}>
                { renderNextButton() }
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Import;