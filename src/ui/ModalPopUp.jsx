import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPopUp({btnText, btnStyle, title, desc, close, save, action}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }

  const handleAction = ()=> {
    action ? action() : null
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className={btnStyle} onClick={handleShow}>
        {btnText}
      </Button>

      <Modal show={show} onHide={handleClose} className='modal-style'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='text-center'>{desc}</Modal.Body>
        <Modal.Footer>
          {
            close ? 
            <Button variant="light" onClick={handleClose}>
           {close}
          </Button>
          : null
          }
         {
          save ? 
          <Button variant="dark" onClick={handleAction}>
          {save}
        </Button>
        : null
         }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopUp;