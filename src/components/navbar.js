import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";

const StyledNavLink = styled(Nav.Link)`
    color: gray;
`;
export default function CustomNavbar() {
    return (
        <Navbar>
            <Navbar.Brand href="#home">Ben Wu</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <StyledNavLink href="#projects" className="">stuff I built</StyledNavLink>
                <StyledNavLink href="/resume" className="">resume</StyledNavLink>
                <StyledNavLink href="#contact" className="">contact</StyledNavLink>
                <StyledNavLink href="#home" className="">eyes hurt? click here</StyledNavLink>
            </Navbar.Collapse>
        </Navbar>
    )
}
