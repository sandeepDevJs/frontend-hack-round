import React from "react";
import Input from "./controls/Input";
import TextArea from "./controls/TextArea";
import Select from "./controls/Select";
import FileInput from "./controls/FileInput";

const FormikControl = (props) => {
	const { control, ...rest } = props;
	switch (control) {
		case "input":
			return <Input {...rest} />;

		case "textarea":
			return <TextArea {...rest} />;

		case "select":
			return <Select {...rest} />;

		case "fileInput":
			return <FileInput {...rest} />;

		default:
			return null;
	}
};

export default FormikControl;
