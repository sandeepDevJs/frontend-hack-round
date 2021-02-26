import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	Button,
	Table,
	Pagination,
	Form,
	Image,
	Row,
	Col,
} from "react-bootstrap";
import {
	useTable,
	useSortBy,
	useGlobalFilter,
	usePagination,
} from "react-table";
import ModalBox from "../components/ModalBox";
import GlobalFilter from "../components/GlobalFilter";
import { getCompDataAction } from "../actions/companyActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
	POST_COMPANY_DATA_RESET,
	PUT_COMPANY_DATA_RESET,
} from "../constants/companyConstants";

const HomeScreen = () => {
	const [show, setshow] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [compId, setCompId] = useState(0);

	const closeModalBox = () => {
		setshow(false);
	};
	const openModalBox = () => {
		setshow(true);
	};

	const COMPANY_COLUMNS = useRef([
		{
			Header: "Logo",
			accessor: "logo",
			Cell: ({ cell }) => (
				<Image
					src={cell.row.values.logo}
					alt={cell.row.values.name}
					width={100}
					height={100}
					fluid
					rounded
				/>
			),
		},
		{
			Header: "Company Name",
			accessor: "name",
		},
		{
			Header: "Description",
			accessor: "description",
		},
		{
			Header: "Email",
			accessor: "email",
		},
		{
			Header: "Contact No.",
			accessor: "contact",
		},
		{
			Header: "State",
			accessor: "state",
		},
		{
			Header: "City",
			accessor: "city",
		},
		{
			Header: "Actions",
			accessor: "_id",
			Cell: ({ cell }) => (
				<Button
					size="sm"
					variant="success"
					onClick={() => {
						setCompId(cell.row.values._id);
						setEditModal(true);
					}}
				>
					<i className="fas fa-edit"></i>
				</Button>
			),
		},
	]);

	const dispatch = useDispatch();

	const { loading, data: compData, error } = useSelector(
		(state) => state.getCompData
	);
	const { success: postSuccess } = useSelector((state) => state.postCompData);
	const { success: putSuccess } = useSelector((state) => state.putCompData);

	useEffect(() => {
		if (postSuccess) {
			dispatch({ type: POST_COMPANY_DATA_RESET });
		}
		if (putSuccess) {
			dispatch({ type: PUT_COMPANY_DATA_RESET });
		}
		dispatch(getCompDataAction());
	}, [dispatch, postSuccess, putSuccess]);

	const columns = useMemo(() => COMPANY_COLUMNS.current, [COMPANY_COLUMNS]);
	const data = useMemo(() => (compData ? compData : []), [compData]);

	const {
		getTableBodyProps,
		getTableProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		prepareRow,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		state,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			initialState: { pageSize: 5 },
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const { globalFilter, pageIndex, pageSize } = state;

	return (
		<div>
			<br />

			{/* For Add Buttom */}
			<ModalBox showFlag={show} handleClose={closeModalBox} />

			{/* For Edit */}
			<ModalBox
				showFlag={editModal}
				isEdit={true}
				compId={compId}
				handleClose={() => setEditModal(false)}
			/>

			{error && <Message>{error}</Message>}

			<Row>
				<Col md={9}>
					<h1>Company List {loading && <Loader />}</h1>
				</Col>
				<Col md={3}>
					<Button
						style={{ float: "right" }}
						onClick={() => {
							openModalBox();
						}}
					>
						<i className="fa fa-plus" aria-hidden="true"></i>
						&nbsp; Add
					</Button>
				</Col>
			</Row>

			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

			<Table
				variant="primary"
				hover
				responsive
				className="table-sm"
				{...getTableProps()}
			>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("Header")}
									<span>
										{column.isSorted ? (
											column.isSortedDesc ? (
												<i className="fas fa-sort-down"></i>
											) : (
												<i className="fas fa-sort-up"></i>
											)
										) : (
											""
										)}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</Table>
			<Pagination>
				<span>
					page{" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</span>{" "}
				|
				<Form.Group>
					<Form.Control
						style={{ paddingTop: "0px", margin: "0px" }}
						as="select"
						value={pageSize}
						onChange={(e) => setPageSize(parseInt(e.target.value))}
					>
						{[5, 10, 15, 20].map((psize) => (
							<option key={psize} value={psize}>
								show {psize}
							</option>
						))}
					</Form.Control>
				</Form.Group>
				<Pagination.Item
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				>
					<i className="fas fa-angle-double-left"></i>
				</Pagination.Item>
				<Pagination.Item
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				>
					<i className="fas fa-caret-square-left"></i>
				</Pagination.Item>
				<Pagination.Item onClick={() => nextPage()} disabled={!canNextPage}>
					<i className="fas fa-caret-square-right"></i>
				</Pagination.Item>
				<Pagination.Item
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				>
					<i className="fas fa-angle-double-right"></i>
				</Pagination.Item>
			</Pagination>
		</div>
	);
};

export default HomeScreen;
