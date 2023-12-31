
import { useState } from 'react';
import { NavDropdown, Modal, Button, Container, Row, Col } from 'react-bootstrap';

import useImport, { stages } from './useImport';
import Slice from './Slice';
import Configure from './Configure';

const Import = ({

}) => {

  const importer = useImport();

  const [show, setShow] = useState(false);
  const handleClose = () => { 

    if (importer.stage === stages.configure) return importer.goSlice(); 

    importer.clear();
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const renderStage = () => {

    if (importer.stage === stages.slice) return <Slice importer={importer} />
    if (importer.stage === stages.configure) return (
      importer.slicer.getSlices(importer.dimensions).map((_, index) => (
        <Configure
          key={index}
          index={index}
          importer={importer}
        />
      ))
    )
  };

  const renderBackButton = () => {

    if (importer.stage === stages.slice) return (
      <Button variant="danger" onClick={handleClose}>Cancel</Button>
    );

    if (importer.stage === stages.configure) return (
      <Button variant="danger" onClick={importer.goSlice}>Back</Button>
    );
  };

  const renderNextButton = () => {
    
    if (importer.stage === stages.slice) return (
      <Button 
        variant="primary" 
        className="w-100" 
        onClick={importer.goConfigure}
        disabled={!importer.spriteUrl}
      >
        Slice
      </Button>
    );

    if (importer.stage === stages.configure) return (
      <Button
        variant="primary"
        className="w-100"
        onClick={() => console.log(importer.assetConfigs)}
        disabled={!importer.canImport()}
      >
        Import
      </Button>
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