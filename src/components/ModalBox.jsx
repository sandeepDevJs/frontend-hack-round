import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import FormikContainer from "./FormikContainer";
import Message from "./Message";
import Loader from "./Loader";
import { getCompDataByIdAction } from "../actions/companyActions";

const ModalBox = ({ showFlag, handleClose, isEdit, compId }) => {
	const dispatch = useDispatch();

	const { loading, data, error } = useSelector(
		(state) => state.getCompDataById
	);

	useEffect(() => {
		if (isEdit) {
			dispatch(getCompDataByIdAction(compId));
		}
	}, [isEdit, dispatch, compId]);

	return (
		<Modal show={showFlag} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Company Info Form {loading && <Loader />}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{error && <Message>{error}</Message>}
				{isEdit ? (
					<FormikContainer
						closeFun={handleClose}
						isEdit={true}
						initVals={data}
						compId={compId}
					/>
				) : (
					<FormikContainer closeFun={handleClose} />
				)}
			</Modal.Body>
		</Modal>
	);
};

export default ModalBox;
