import React from 'react';
import "../Footer/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

 import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

// className="square border border-0"
export const Footer = () => {
  return (
<div className='footer'>
    <CardGroup>
      <Card className='square border border-0'> 
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
        <Card.Text className='footerphn'>
            Phone: 
          </Card.Text>
          <Card.Title><a className='footer_phone' rel="noopener noreferrer" target="_blank" href = "tel: +91 9359723356"><FiPhone /> +91 9359723356</a></Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card >
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
        <Card.Text className='footermail'>
            E-mail: 
          </Card.Text>
          <Card.Title><a className='footer_mail' rel="noopener noreferrer" target="_blank" href = "mailto: atharvagujarathi92@gmail.com"><TfiEmail /> atharvagujarathi92@gmail.com</a></Card.Title>
          
        </Card.Body>
        
      </Card>
      
    </CardGroup>
</div>
  )
}


// TfiEmail