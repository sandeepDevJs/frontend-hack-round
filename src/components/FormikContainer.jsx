import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import FormikControl from "./FormikControl";

import {
	postCompDataAction,
	putCompDataAction,
	getCompDataAction,
} from "../actions/companyActions";
import {
	POST_COMPANY_DATA_RESET,
	PUT_COMPANY_DATA_RESET,
} from "../constants/companyConstants";

const FormikContainer = ({ closeFun, isEdit, initVals, compId }) => {
	const dropDownOptionsForState = [
		{
			key: "Maharashtra",
			value: "Maharashtra",
		},
		{
			key: "Delhi",
			value: "Delhi",
		},
		{
			key: "UP",
			value: "UP",
		},
	];

	let initialValues = {};

	//if isEdit set to true then set initialValues to provided data
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

	const getCity = useSelector((state) => state.getCity);

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

		//if update request
		if (isEdit) {
			dispatch(putCompDataAction(fData, compId));
		} else {
			dispatch(postCompDataAction(fData));
		}
		dispatch(getCompDataAction());
	};

	//clear previous data
	useEffect(() => {
		dispatch({ type: POST_COMPANY_DATA_RESET });
		dispatch({ type: PUT_COMPANY_DATA_RESET });
	}, [dispatch]);

	//in Edit Mode get State & set the city accordingly
	useEffect(() => {
		if (initVals) {
			if (initVals.state) {
				dispatch({ type: initVals.state });
			}
		}
	}, [initVals, dispatch]);

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
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
						options={dropDownOptionsForState}
						onChange={(val) => {
							dispatch({ type: val });
						}}
					/>
					<FormikControl
						control="select"
						name="city"
						label="Select City"
						options={getCity}
					/>

					<FormikControl control="fileInput" name="logo" />

					<Button type="submit">Submit</Button>
					<Button variant="secondary" onClick={() => closeFun()}>
						Close
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;
