import React from 'react';
import "../Workexperience/Workexperience.css";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { VscDebugBreakpointData } from "react-icons/vsc";

function WeTitle() {
  return (
    <>
    
<Form.Text className='we_title fs-1'>
<VscDebugBreakpointData className='q' size={30} />  Work Experience Details:
      </Form.Text> 
    
            </>
  )
}

export const Workexperience = (props) => {
  return (
    <div className='we'>
        <CardGroup className='crdgrp2'>
      <Card bg="dark" className='we_crd'>
      <div className='photo1'>
        <Card.Img variant="top" src={props.symbol} height={'380px'} />
        </div>
        <Card.Body className='square border border-0.1'>
          <Card.Title className='we_1 fs-4'></Card.Title>
          <Card.Title className='we_1 fs-5'>{props.name}</Card.Title>
          <Card.Text className='we_1 fs-6'>
            {props.position}<br />
            {props.time_period}<br />
            
          </Card.Text>
          <Button variant="success" href={props.view_details} target="_blank" rel="noreferrer">View Details</Button>
          <Card.Text className='we_1 fs-6'>
            
          </Card.Text>
        </Card.Body>
        
      </Card>

      
     
    </CardGroup>


    </div>
  )
}

export default WeTitle;
