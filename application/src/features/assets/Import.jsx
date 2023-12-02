
import { useState } from 'react';
import { NavDropdown, Modal, Button } from 'react-bootstrap';

const Import = ({

}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavDropdown.Item onClick={handleShow}>
        import
      </NavDropdown.Item>

      <Modal show={show} onHide={handleClose} size="lg">
        <h1>Hello World!</h1>
      </Modal>
    </>
  );
};

export default Import;