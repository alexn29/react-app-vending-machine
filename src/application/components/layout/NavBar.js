import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const NavBarContainer = styled(Navbar)`
    background-color: var(--indigo);
`;

const NavBar = () => {
    return (
        <NavBarContainer variant="dark" expand="md">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold">Vending Machine</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/orders">
                            <Nav.Link>Orders</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </NavBarContainer>
    )
}

export default NavBar
