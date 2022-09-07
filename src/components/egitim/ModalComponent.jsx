import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const ModalComponent = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tebrikler </h4>
        <p>
        Eğitim bölümünüz tamamlandı. Lütfen bir sonraki Eğitim bölümüne geçiniz.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to={"/egitim"}>
        <Button onClick={props.onHide}>Sonraki Bölüm</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
