import React from 'react';
import "../Education/Education.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { VscDebugBreakpointData } from "react-icons/vsc";


function EducationTitle() {
    return (
      <>
      
<Form.Text className='education_title fs-1'>
        <VscDebugBreakpointData className='q' size={30} /> Education Details :
        </Form.Text> 
        </>
    )
}

export const Education = (props) => {
  return (
<>

        
    <div className='education'>
        


        <CardGroup className='crdgrp1'>
      <Card bg="dark"  className='edu_crd square border border-0.1'>
      <div className='photo'>
        <Card.Img variant="top" src={props.symboll} height={'300px'} />
        </div>
        <Card.Body>
          <Card.Title className='education_1 fs-4 edd'>Degree: {props.degree}</Card.Title>
          <Card.Title className='education_1 fs-5'>Stream: {props.stream}</Card.Title>
          <Card.Text className='education_1 fs-6'>
            College Name: {props.name}<br />
            Time Period: {props.tp}<br />
            Score: {props.score}
          </Card.Text>
          <Card.Text className='education_1 fs-6'>
            
          </Card.Text>
        </Card.Body>
        
      </Card>

      
     
    </CardGroup>
    </div>

    </>
  )
}

export default EducationTitle;
