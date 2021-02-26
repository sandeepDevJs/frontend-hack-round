import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormLabel } from "react-bootstrap";
import Messge from "../Message";

const Select = (props) => {
	const { label, name, options, onChange, ...rest } = props;
	return (
		<div>
			<FormLabel htmlFor={name}>{name}</FormLabel>
			<Field name={name} className="form-control">
				{({ form, field }) => {
					const { setFieldValue } = form;
					const { value } = field;
					return (
						<select
							className="form-control"
							name={name}
							id={name}
							{...rest}
							onChange={(e) => {
								if (name === "state") {
									onChange(e.target.value);
								}
								setFieldValue(name, e.target.value);
							}}
							value={value}
						>
							<option key={"Select An Option"} value={""}>
								Select An Option
							</option>
							{options.map((option) => {
								return (
									<option key={option.value} value={option.value}>
										{option.key}
									</option>
								);
							})}
						</select>
					);
				}}
			</Field>
			<ErrorMessage name={name} component={Messge} />
		</div>
	);
};

export default Select;
