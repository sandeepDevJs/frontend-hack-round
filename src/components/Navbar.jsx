import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavbarComp = () => {
	return (
		<header>
			<Navbar bg="primary" expand="lg">
				<Container>
					<LinkContainer style={{ color: "white" }} to="/">
						<Navbar.Brand>Hack Round Project</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default NavbarComp;
