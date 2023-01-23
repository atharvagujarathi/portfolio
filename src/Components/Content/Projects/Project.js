import React from 'react';
import "../Projects/Project.css";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { VscDebugBreakpointData } from "react-icons/vsc";



function ProTitle() {
  return (
    <>
<Form.Text className='pro_title fs-1'>
<VscDebugBreakpointData className='q' size={30} />  Project Details:
      </Form.Text> 
      </>
  )
}



export const Project = (props) => {
  return (
    <div className='pro'>
<CardGroup className='crdgrp2'>
      <Card bg="dark" className='we_crd square border border-0.1'>
      <div className='photo1'>
        <Card.Img variant="top" className='photo2' src={props.img}  />
        </div>
        <Card.Body>
          <Card.Title className='pr_1 fs-4'>{props.name}</Card.Title>
          <Card.Title className='pr_1 fs-5'></Card.Title>
          <Card.Text className='pr_1 fs-6 pe'>
            {props.detailss}
            
          </Card.Text>
          <Button variant="success" href={props.link} target="_blank" className='btnn' rel="noreferrer">Get Code </Button>
          <Button variant="success" href={props.details} target="_blank" className='btnn1' rel="noreferrer"> View Details</Button>
          <Card.Text className='pr_1 fs-6'>
            
          </Card.Text>
        </Card.Body>
        
      </Card>

      
     
    </CardGroup>
    </div>
  )
}


export default ProTitle;
