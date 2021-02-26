import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import FormikControl from "./FormikControl";
import Message from "./Message";
import {
	postCompDataAction,
	putCompDataAction,
} from "../actions/companyActions";
import {
	POST_COMPANY_DATA_RESET,
	PUT_COMPANY_DATA_RESET,
} from "../constants/companyConstants";

const FormikContainer = ({ closeFun, isEdit, initVals, compId }) => {
	let initialValues = {};
	if (isEdit) {
		initialValues = initVals;
	} else {
		initialValues = {
			name: "",
			email: "",
			contact: "",
			description: "",
			state: "",
			city: "",
			logo: "",
		};
	}
	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, "Name Must At Least Contain 2 Characters")
			.max(100, "Name Cannot Be More Than 100 chars!")
			.required("Required!"),
		email: Yup.string().email().required("Required!"),
		description: Yup.string()
			.min(6, "Descripton Must At Least Contain 2 Characters")
			.max(300, "Description Cannot Be More Than 300 characters!")
			.required("Required!"),
		contact: Yup.string()
			.matches(/\d{10}/, "Contact No. Can Be Of 10 Digits Only")
			.required("Required!"),
		state: Yup.string()
			.min(2, "State Name Must At Least Contain 2 Characters")
			.max(50, "State Name Cannot Be More Than 50 characters!")
			.required("Required!"),
		city: Yup.string().min(2).max(50).required("Required!"),
		logo: Yup.mixed().required("logo image is requird"),
	});

	const dropDownOptionsForState = [
		{ key: "Maharashtra", value: "Maharashtra" },
		{ key: "Delhi", value: "Delhi" },
		{ key: "UP", value: "UP" },
	];

	const [city, setCity] = useState([{ key: "Select State First!", value: "" }]);

	const setDropDownOptionsForCity = (state) => {
		switch (state) {
			case "Maharashtra":
				setCity([
					{ key: "Mumbai", value: "Mumbai" },
					{ key: "Navi Mumbai", value: "Navi Mumbai" },
					{ key: "Pune", value: "Pune" },
				]);
				break;
			case "Delhi":
				setCity([
					{ key: "Ghaziabad", value: "Ghaziabad" },
					{ key: "Agra", value: "Agra" },
					{ key: "Faridabad", value: "Faridabad" },
				]);
				break;
			case "UP":
				setCity([
					{ key: "Pryagraj", value: "Pryagraj" },
					{ key: "Noida", value: "Noida" },
					{ key: "varanasi", value: "varanasi" },
				]);
				break;
			default:
				setCity([{ key: "Select State First!", value: "" }]);
				break;
		}
	};

	const { loading, success, error } = useSelector(
		(state) => state.postCompData
	);

	const {
		loading: putLoading,
		success: putSuccess,
		error: putError,
	} = useSelector((state) => state.putCompData);
	const dispatch = useDispatch();

	const onSubmit = (values) => {
		let fData = new FormData();
		fData.append("logo", values.logo);
		fData.append("name", values.name);
		fData.append("description", values.description);
		fData.append("email", values.email);
		fData.append("contact", values.contact);
		fData.append("state", values.state);
		fData.append("city", values.city);

		if (isEdit) {
			dispatch(putCompDataAction(fData, compId));
		} else {
			dispatch(postCompDataAction(fData));
		}
	};

	useEffect(() => {
		dispatch({ type: POST_COMPANY_DATA_RESET });
		dispatch({ type: PUT_COMPANY_DATA_RESET });
	}, []);

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
					{(loading || putLoading) && <h1>Loading...</h1>}
					{(error || putError) && <Message>{error || putError}</Message>}
					{(success || putSuccess) && closeFun()}
					<FormikControl
						control="input"
						type="text"
						name="name"
						label="Company Name"
					/>
					<FormikControl
						control="input"
						type="email"
						name="email"
						label="Email"
					/>

					<FormikControl
						control="input"
						type="text"
						name="contact"
						label="Contact No."
					/>
					<FormikControl
						control="textarea"
						name="description"
						label="Description"
					/>
					<FormikControl
						control="select"
						name="state"
						label="Select State"
						options={dropDownOptionsForState}
						onChange={setDropDownOptionsForCity}
					/>
					<FormikControl
						control="select"
						name="city"
						label="Select City"
						options={city}
					/>

					<FormikControl control="fileInput" name="logo" />

					<Button type="submit">Submit</Button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;
