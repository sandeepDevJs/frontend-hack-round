import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormLabel } from "react-bootstrap";
import Messge from "../Message";

const TextArea = (props) => {
	const { controls, name, label, ...rest } = props;
	return (
		<div>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Field
				as="textarea"
				className="form-control"
				name={name}
				id={name}
				{...rest}
			/>
			<ErrorMessage name={name} component={Messge} />
		</div>
	);
};

export default TextArea;
