import { Modal, Button } from "react-bootstrap";

function ModalMessage({alert, modal, closeModal}) {
    

  return (
    <div className={modal === true ? "d-block modal show" : "d-none"}>
      <Modal.Dialog>
        <Modal.Header
           onClick={closeModal} closeButton
        >
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {alert}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}
            variant="primary"
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalMessage;
