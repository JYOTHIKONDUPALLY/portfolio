import React from 'react'
import styled from "styled-components";
import {education} from "../../data/constants";
import EducationCard from '../Card/EducationCard';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"


const Container=styled.div`
display:flex;
flex-direction:column;
justifu-content:center;
position:relative;
z-index:1;
align-items:center;
padding:40px 0px 80px 0px;

@media (max-width:968px){
  padding:0px
}
`
const Wrapper=styled.div`
max-width:1100px;
position:relative;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:100%;
gap:12px;
`
const Title=styled.div`
font-size:42px;
font-weight:600;
text-align:center;
margin-top:20px;
color:${({theme})=>theme.text_primary};

@media (max-width:760px){
    margin-top:12px;
    font-size:32px;
}`

const Description=styled.div`
font-size:18px;
max-width:600px;
text-align:center;
color:${({theme})=>theme.text_secondary};

@media (max-width:768px){
    font-size:16px;
}`



const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Description>My education details.</Description>
        <VerticalTimeline>
          {education.map((edu, index)=>(
            <EducationCard key={`edu-${index}`} education={edu}/>
          ))}
        </VerticalTimeline>
  
      </Wrapper>
    </Container>
  )
}

export default Education