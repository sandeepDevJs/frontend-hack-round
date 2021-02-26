import React, { useState } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
	const [value, setvalue] = useState(filter);

	const onChange = useAsyncDebounce((value) => {
		setFilter(value || undefined);
	}, 200);

	return (
		<FormGroup>
			<FormControl
				type="text"
				placeholder="Search Here.."
				value={value || ""}
				onChange={(e) => {
					setvalue(e.target.value);
					onChange(e.target.value);
				}}
			/>
		</FormGroup>
	);
};

export default GlobalFilter;
