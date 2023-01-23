import { useState } from "react";
import "../Intro/Intro.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Photu from "../Img/photu.jpeg";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';


export const Intro = () => {
  return (
    <div className='intro'>

<Navbar bg="light" className="i"  expand="lg">
      <Container >
        <Navbar.Brand   className='intro_header_brandname'>Atharva Gujarathi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto intro_collapse">
            <Nav.Link href="https://www.linkedin.com/in/atharva-gujarathi-3845831b1/" target="_blank" rel="noreferrer" className='linkedin'><FaLinkedin size={25}/> Linkedin </Nav.Link>
            <Nav.Link href="https://github.com/atharvagujarathi" target="_blank" rel="noreferrer" className='github'> <FaGithub size={25}/> GitHub </Nav.Link>
            <Nav.Link href="https://www.instagram.com/_atharva_17__/" target="_blank" rel="noreferrer" className='github'> <FaInstagram size={25}/> Instagram</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
        <CardGroup  className='cardgrp'>
      <Card bg="dark" className='square border border-0 '>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title className='intro_title1 fs-4'></Card.Title>
          <Card.Title className='intro_title2 fs-1 i'>Atharva Gujarathi</Card.Title>
          {/* <Card.Text className='intro_title3'>

            <div className='row'>
                <div className='col-3'>Front-End Developer</div>
                <div className='col-3'>React.JS Developer</div>
                <div className='col-3'>MERN-Stack Developer</div>
                <div className='col-3'>Full-Stack Developer</div>
            </div>

          </Card.Text> */}
          <Card.Text className='intro_title4 fs-5'>
           <p>I have completed my Bachelor of Engineering in
Information Technology and I'm interested in web
development and seeking exciting opportunities
related to the same. Having total 01 year experience
as an intern & full-time at an early-stage start-up and
well known companies. I have repeatedly been
exposed to new technologies and challenges. This
has made me able to quickly adapt to changes and
gain a broader perspective.</p>
          </Card.Text>

          <Card.Text style={{textAlign: "center"}}>
          <Button variant="secondary" className='intro_button' href="https://drive.google.com/file/d/1aOuH8_lML8A7VdqU5a6Xct3e9wMUJUD1/view?usp=sharing" target="_blank" rel="noreferrer"  size="lg" >
          Download CV
        </Button>
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Img variant="top" className="photu square border border-0 " src={Photu}  />
        
       
      </Card>
      
      
    </CardGroup>

    
    </div>
  )
}


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="text-secondary" bg="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEUhJSk0tFmGAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
          alt="First slide"
          height={'200px'}
        />
        <Carousel.Caption>
          <h3 className="carousel_h fs-1">React.JS Developer</h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEUhJSk0tFmGAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
          alt="Second slide"
          height={'200px'}
        />

        <Carousel.Caption>
          <h3 className="carousel_h fs-1">Front-End Developer</h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEUhJSk0tFmGAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
          alt="Third slide"
          height={'200px'}
        />

        <Carousel.Caption>
          <h3 className="carousel_h fs-1">Full Stack Developer</h3>
          <p>
            .
          </p>
        </Carousel.Caption>

        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEUhJSk0tFmGAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
          alt="Third slide"
          height={'200px'}
        />

        <Carousel.Caption>
          <h3 className="carousel_h fs-1">Back-End Developer</h3>
          <p>
            .
          </p>
        </Carousel.Caption>

        
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

// render(<ControlledCarousel />);
