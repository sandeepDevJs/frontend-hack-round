import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalBox from "../components/ModalBox";

const HomeScreen = () => {
	const [show, setshow] = useState(false);

	const openModalBox = () => {
		setshow(true);
	};
	const closeModalBox = () => {
		setshow(false);
	};

	return (
		<div>
			<h1>This Is Home Screen</h1>
			<Button onClick={openModalBox}>Open Modal</Button>
			<ModalBox showFlag={show} handleClose={closeModalBox} />
		</div>
	);
};

export default HomeScreen;
