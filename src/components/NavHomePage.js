import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Link, Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomNavbar from './NavMain';
import LeftNavigation from "./leftNavigation/leftNavigation";
import Header from "./header/header";
import Main from "./setting/setting";

const NavHomePage = () => {
    // const { keycloak, initialized } = useKeycloak();

    // function logoutHelper() {
    //     console.log("login clicked");
    //     keycloak.logout();
    // };


    return (
        <div>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Hype</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/app/dashboard">dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/app/account">Account</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">

                            {!!keycloak.authenticated && (
                                <Nav.Link onClick={() => logoutHelper()}>
                                    Logout ({keycloak.tokenParsed.preferred_username})</Nav.Link>)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet /> */}

            <LeftNavigation />
            <div className="right-containter">
                <Header title="Nav"/>
                <Main />
            </div>
        </div>
    );
};

export default NavHomePage;
