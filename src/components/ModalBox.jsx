import React from "react";
import { Button, Modal } from "react-bootstrap";
import FormikContainer from "./FormikContainer";

const ModalBox = ({ showFlag, handleClose }) => {
	return (
		<Modal show={showFlag} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Company Info Form</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<FormikContainer />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalBox;
