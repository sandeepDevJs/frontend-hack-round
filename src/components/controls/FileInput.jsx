import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormLabel, FormGroup } from "react-bootstrap";
import Messge from "../Message";

const FileInput = (props) => {
	const { name, ...rest } = props;
	return (
		<FormGroup>
			<br />
			<FormLabel>Select Logo Image </FormLabel>
			<Field name={name}>
				{({ form }) => {
					const { setFieldValue } = form;

					return (
						<input
							name={name}
							type="file"
							onChange={(e) => setFieldValue(name, e.target.files[0])}
							accept="image/*"
							{...rest}
						/>
					);
				}}
			</Field>
			<ErrorMessage name={name} component={Messge} />
		</FormGroup>
	);
};

export default FileInput;
