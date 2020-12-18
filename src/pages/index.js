import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "../components/navbar";
import {Container, Row} from "react-bootstrap";
import "fontsource-source-code-pro";
import "../components/layout.scss";
import styled from "styled-components";
import TypingIntro from "../components/typingIntro";
import { useTheme } from "../components/themeContext";

const StyledLink = styled.a`
  color: black;
  transition: 0.3s;
  :hover {
    color: ${props => props.color};
    text-decoration: none;
  }
`;

const Wrapper = styled('div')`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  h1 {
    color: ${props => props.theme.body};
  }
`;

// https://i.pinimg.com/originals/68/31/45/6831454cf213ed7ffa541fe666fa9cf8.gif

export default function Home() {
  return (
    <>
    <CustomNavbar/>
    <Container>
      <TypingIntro/>
      <p id="home">I'm currently a junior at Harvard studying Computer Science and Economics and incoming SWE intern at
        <StyledLink color="Coral" href="https://www.doordash.com/"> DoorDash</StyledLink>.
        Previously I've worked at
        <StyledLink color="CornflowerBlue" href="https://www.campus-insights.com/"> Campus Insights </StyledLink>
        (Head User Experience Researcher),
        <StyledLink color="LightSeaGreen" href="https://compbio.hms.harvard.edu/index"> Harvard Medical School (Department of Bioinformatics) </StyledLink>
         (SWE Intern), and 
        <StyledLink color="DeepSkyBlue" href="https://www.pfizer.com/"> Pfizer </StyledLink>(SWE Intern).
      </p>
      <Row className="justify-content-md-center mt-5">
      <img class="city-img" alt="city view" src="https://she-ra.carrd.co/assets/images/image01.gif?v77767943421551"></img>
      </Row>
      <Row>
        <h1>stuff I built</h1>

      </Row>
    </Container>
    </>
  )
}
