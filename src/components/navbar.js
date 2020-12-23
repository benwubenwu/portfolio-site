import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";
import DarkLightSwitch from "../components/darkLightSwitch";

const StyledNavLink = styled(Nav.Link)`
    color: gray;
`;

export default function CustomNavbar(props) {
    return (
        <Navbar bg={props.color} sticky="top">
            <StyledNavLink href="#home">Ben Wu</StyledNavLink>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <StyledNavLink href="#projects" className="">projects</StyledNavLink>
                {/* <StyledNavLink href="/resume" className="">resume</StyledNavLink> */}
                <StyledNavLink href="#contact" className="">contact</StyledNavLink>
                <DarkLightSwitch/>
            </Navbar.Collapse>
        </Navbar>
    )
}
