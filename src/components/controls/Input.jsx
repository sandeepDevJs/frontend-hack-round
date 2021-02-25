import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormLabel } from "react-bootstrap";
import Messge from "../Message";

const Input = (props) => {
	const { label, name, ...rest } = props;
	return (
		<div>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Field className="form-control" id={name} name={name} {...rest} />
			<ErrorMessage name={name} component={Messge} />
		</div>
	);
};

export default Input;
