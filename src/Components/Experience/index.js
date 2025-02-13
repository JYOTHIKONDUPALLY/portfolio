import React from 'react'
import styled from "styled-components";
import { experiences } from '../../data/constants';

const Container=styled.div`
display:flex;
flex-direction:column;
justifu-content:center;
position:relative;
z-index:1;
align-items:center;
padding:40px 0px 80px 0px;

@media (max-width:968px){
  padding:30px 0px 50px 0px;
}
`
const Wrapper=styled.div`
max-width:1100px;
position:realtive;
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
const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  font-weight:600;
  margin-top: -10px;
  color:${({ theme }) => theme.text_primary + 99}
`;
const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding:5px;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Des = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  padding:10px 20px;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Card=styled.div`
width:400px;
background-color:${({theme})=>theme.card};
border:1px solid  #854CE6;
border-radius:16px; 
padding:18px 36px;
`

const Experience = () => {
  return (
    <>
    {experiences.map((experience)=>{
  <Container id="experience">
    <Wrapper>
        <Title>Experience</Title>
        <Description>My work experience in different companies, in different positions...</Description>
      <Card>
        <Image src={experience.img} alt="company image"/>
        <Body>
        <Role>{experience.role}</Role>
        <Company>{experience.company}</Company>
        <Date>{experience.date}</Date>
        <Des>{experience.desc}</Des>
        <Skills>
            <b>Skills:</b>
            <ItemWrapper>
                {experience?.skills?.map((skill, index)=>
                <Skill>•{skill}</Skill>)}
            </ItemWrapper>
        </Skills>
        </Body>
      </Card>
    </Wrapper>
  </Container>
  })}
</>
  )
}

export default Experience
