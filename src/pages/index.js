import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "../components/navbar";
import {Container, Row, Col, Button} from "react-bootstrap";
import "fontsource-source-code-pro";
import "fontsource-montserrat";
import "fontsource-muli";
import "fontsource-cairo";
import "../components/layout.scss";
import styled from "styled-components";
import TypingIntro from "../components/typingIntro";
import DarkLightSwitch from "../components/darkLightSwitch";
import { FaRegMoon } from 'react-icons/fa';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import FadeInSection from "../components/fade";
import { BiLinkExternal } from "react-icons/bi";

const StyledLink = styled.a`
  /* color: ${props => props.color}; */
  /* color: gray; */
  /* color: #f1a0a1; */
  transition: 0.3s;
  :hover {
    color: ${props => props.color};
    text-decoration: none;
  }
`;

const StyledSmall = styled.small`
  color: gray;
  margin-left: 40%;
`;

const StyledRow = styled(Row)`
  margin-top: 150px;
  margin-bottom: 100px;
`;

const StyledP = styled.p`
  padding-left: 15%;
  padding-right: 15%;
`;

const StyledHr = styled.hr`
  border-color: ${props => props.color};
`;

const StyledGithub = styled(AiFillGithub)`
  margin-left: 2%;
  margin-right: 2%;
`;

const StyledEmail = styled(AiOutlineMail)`
  margin-left: 2%;
  margin-right: 2%;
`;

const StyledLinkedin = styled(AiFillLinkedin)`
  margin-left: 2%;
  margin-right: 2%;
`;

const IconLink = styled.a`
  :hover {
    color: ${props => props.color};
    text-decoration: none;
  }
  margin-left: 2%;
  margin-right: 2%;
  color: gray;
`;
// https://i.pinimg.com/originals/68/31/45/6831454cf213ed7ffa541fe666fa9cf8.gif
// https://i.imgur.com/91PIFIL.gif
export default function Home() {
  const [night, setNight] = useState(localStorage.getItem('theme') === 'dark');
  return (
    <>
    {/* {!night && <CustomNavbar color="light"/>}
    {night && <CustomNavbar color="dark"/>} */}
    <CustomNavbar/>
    <div id="home"></div>
    <Container className="px-5 py-3">
      <Row className="mt-5 justify-content-md-center">
        <TypingIntro/>
      {/* <small onClick={()=> setNight(!night)}>
        <DarkLightSwitch/>
      </small> */}
      </Row>
      <Row className="my-5 justify-content-md-center">
      <StyledP>Hi I'm Ben, a junior at Harvard studying Computer Science and Economics and
        <StyledLink color="#cb4154" href="https://www.doordash.com/"> incoming SWE intern at DoorDash</StyledLink>.
        Previously I've worked at
        <StyledLink color="CornflowerBlue" href="https://www.campus-insights.com/"> Campus Insights (Head User Experience Researcher)</StyledLink>
        {/* (Head User Experience Researcher) */}
        ,
        <StyledLink color="LightSeaGreen" href="https://compbio.hms.harvard.edu/index"> Harvard Medical School (Department of Bioinformatics) (SWE Intern)</StyledLink>
         {/* (SWE Intern) */}
         , and 
        <StyledLink color="DeepSkyBlue" href="https://www.pfizer.com/"> Pfizer (SWE Intern)</StyledLink>.
      </StyledP>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <img className="city-img" alt="city view" src="https://she-ra.carrd.co/assets/images/image01.gif?v77767943421551"></img>
      {/* {!night && <img className="city-img" alt="city view" src="https://she-ra.carrd.co/assets/images/image01.gif?v77767943421551"></img>} */}
      {/* {night && <img className="city-img" alt="city view" src={`../../night_time_city.gif`}></img>} */}
      {/* https://i.pinimg.com/originals/e0/73/5d/e0735d1c5b11ff62d1f68f63b4b805b1.gif */}
      {/* {night && <img className="city-img" alt="city view" src={`../../blue_city.gif`}></img>} */}
      </Row>
      <Row className="justify-content-md-center mb-5">
        <StyledSmall>Credit to: <FaRegMoon/></StyledSmall>
      </Row>
      <StyledHr color="#ededed" id="projects"></StyledHr>
      <Row className="justify-content-md-center my-5">
        <h1>Technical skills</h1>
      </Row>
      <Row className="justify-content-center my-5">
        <Col className="text-center">
          <h5>Languages</h5>
          <p>Python</p>
          <p>JavaScript</p>
          <p>C++</p>
          <p>Java</p>
          <p>HTML/CSS</p>
          <p>SQL</p>
        </Col>
        <Col className="text-center">
          <h5>Frameworks</h5>
          <p>Django</p>
          <p>React.js</p>
          <p>Gatsby.js</p>
        </Col>
        <Col className="text-center">
          <h5>Tools</h5>
          <p>Git</p>
          <p>Jira</p>
          <p>Docker</p>
        </Col>
      </Row>
      <StyledHr color="#ededed" id="projects"></StyledHr>
      <Row className="justify-content-center my-5">
        <h1>Experiences</h1>
      </Row>
      <Row className="justify-content-center my-5">
        <Col sm={1}>
          <img className="logo float-right" src={`../../doordash_logo.jpeg`}/>
        </Col>
        <Col sm={8}>
          <h5>DoorDash</h5>
          <h5>Incoming Software Engineering Intern</h5>
        </Col>
        <Col sm={3}>
          <div className="float-right">
            <h5 className="float-right"><i>Summer 2021</i></h5>
            <h5 className="text-right"><i>San Francisco, CA</i></h5>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col sm={1}>
          <img className="t4sg-logo float-right" src={`../../t4sg_logo.png`}/>
        </Col>
        <Col sm={8}>
          <h5>Tech for Social Good</h5>
          <h5>Software Engineer</h5>
        </Col>
        <Col sm={3}>
          <div className="float-right">
            <h5 className="float-right"><i>Fall 2020</i></h5>
            <h5 className="text-right"><i>Cambridge, MA</i></h5>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col sm={1}>
          <img className="logo float-right" src={`../../harvard_wreath.png`}/>
        </Col>
        <Col sm={8}>
          <h5>Harvard University</h5>
          <h5>Teaching Fellow - Intro to Computer Science</h5>
        </Col>
        <Col sm={3}>
          <div className="float-right">
            <h5 className="float-right"><i>Fall 2020</i></h5>
            <h5 className="text-right"><i>Cambridge, MA</i></h5>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col sm={1}>
          <img className="logo float-right" src={`../../pfizer_logo_text.jpg`}/>
        </Col>
        <Col sm={8}>
          <h5>Pfizer</h5>
          <h5>Software Development Intern</h5>
        </Col>
        <Col sm={3}>
          <div className="float-right">
            <h5 className="float-right"><i>Summer 2020</i></h5>
            <h5 className="text-right"><i>New York, NY</i></h5>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col sm={1}>
          <img className="logo float-right" src={`../../park_lab_logo.png`}/>
        </Col>
        <Col sm={8}>
          <h5>Harvard Medical School (Park Lab Computational Genomics)</h5>
          <h5>Software Engineering Intern</h5>
        </Col>
        <Col sm={3}>
          <div className="float-right">
            <h5 className="float-right"><i>Winter 2019</i></h5>
            <h5 className="text-right"><i>Boston, MA</i></h5>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col sm={1}>
          <img className="logo float-right" src={`../../campus_insights_logo.jpg`}/>
        </Col>
        <Col sm={8}>
          <h5>Campus Insights</h5>
          <h5>Head User Experience Researcher</h5>
        </Col>
        <Col sm={3}>
          <div className="float-right">
            <h5 className="float-right"><i>Summer 2019</i></h5>
            <h5 className="text-right"><i>Cambridge, MA</i></h5>
          </div>
        </Col>
      </Row>
      <StyledHr color="#ededed" id="projects"></StyledHr>
      <Row className="justify-content-md-center my-5">
        <h1>Some things I've built</h1>
      </Row>
      <Row className="my-5">
        <Col className="md-2">
          <img className="demo-park float-left" alt="Park Lab project demo" src={`../../park_lab_gif.gif`}></img>
        </Col>
        <Col>
          <h5 className="mb-5 ml-2">Proteomic Data Visualization Web Application</h5>
          <p className="ml-2">
          This website is intended to allow for easy and interactive visualization of the proteomics data analyzed by Brubaker et al. in 
          <StyledLink> "Proteogenomic Network Analysis of Context-Specific KRAS Signaling in Mouse-to-Human Cross-Species Translation." </StyledLink> 
          The study measured the effects of mutant KRAS G12D on the colon and pancreas in a preneoplastic and neoplastic state.
          </p>
          <p className="ml-2">Built with: Python, Django, HTML/CSS, Heroku, Git, PostgreSQL</p>
          <a target="_blank" href="http://ben-lab-project.herokuapp.com/">
            <BiLinkExternal className="float-right float-top mt-0" size={25}/>
          </a>
        </Col>
      </Row>
      <StyledRow>
        <Col className="md-2 float-left">
          <h5 className="mb-5 ml-2">Nintendo Switch Restock Notifier</h5>
          <p className="ml-2">
          Developed an automated Python script that sends a text/email when a certain retailer restocks the Nintendo Switch.
Implemented Python library Beautiful Soup to pull stock status from HTML DOM and Twilio REST API to integrate text
message functionality
          </p>
          <p className="ml-2">Built with: Python</p>
        </Col>
        <Col>
          <img className="demo-switch float-right" alt="Nintendo Switch project demo" src={`../../restock_text.PNG`}></img>
        </Col>
      </StyledRow>
      <StyledHr color="#ededed"></StyledHr>
      <Row className="my-5 justify-content-md-center">
        <h1 id="contact">Get in touch</h1>
      </Row>
      <Row className="my-5 justify-content-md-center">
        <StyledP>
        I'm never too busy to have a chat about new opportunities, so my inbox is always open. Got a question? Want to be friends? Don't be afraid to reach out for any reason. I'll do my best to respond to everyone!
        </StyledP>
      </Row>
      <Row className="my-5 justify-content-md-center">
        <StyledLink href="mailto:benjaminwu@college.harvard.edu">
          <Button variant="outline-secondary">
            Say Hello
          </Button>
        </StyledLink>
      </Row>
      <StyledRow className="justify-content-md-center">
        <IconLink color="#f1a0a1"href="https://github.com/benwubenwu">
          <AiFillGithub size={35}/>
        </IconLink>
        <IconLink color="#cb4154" href="mailto:benjaminwu@college.harvard.edu">
          <AiOutlineMail size={35}/>
        </IconLink>
        <IconLink color="cornflowerblue" href="https://www.linkedin.com/in/benwu73/">
          <AiFillLinkedin size={35}/>
        </IconLink>
      </StyledRow>
    </Container>
    </>
  )
}
