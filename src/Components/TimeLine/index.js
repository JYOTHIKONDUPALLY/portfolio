import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { TimeLineData } from '../../data/constants';
import styled from 'styled-components';


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

const TimeLine = () => {
  return (
    <Container>
        <Title>TimeLine</Title>
        <Description>My completed journey from graduation till now...</Description>
        <VerticalTimeline>
            {TimeLineData.map((timeline, index)=>(
 <VerticalTimelineElement key={index}
 icon={<img width="100%" height="100%"  alt={timeline.alt} style={{borderRadius:"50%", objectFit:"cover"}} src={timeline.img}/>}
 contentStyle={{
    display:"flex",
    flexDirection:"column",
    gap:"12px",
    background:"#1d1836",
    color:"#fff",
    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
    backgroundColor: "rgba(17, 25, 40, 0.83)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    borderRadius: "6px",
  }}
  contentArrowStyle={{
    borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
  }}
 date={timeline.year}>
     <Description>{timeline.text}</Description>
 </VerticalTimelineElement>
   ))}
</VerticalTimeline>
          
           
    </Container>
  )
}

export default TimeLine