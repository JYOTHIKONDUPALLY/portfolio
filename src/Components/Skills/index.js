import React from 'react';
import styled from "styled-components";
import { skills } from '../../data/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Des = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
  gap: 30px;
`;

const Skill = styled.div`
width:100%;
  max-width: 400px;
  height: 300px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;

`;

const SkillItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  gap:8px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  color: ${({ theme }) => theme.text_primary + 80};
  padding: 10px 14px;
  font-weight: 400;
  @media (max-width: 760px) {
    font-size: 14px;
    padding:8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    padding:6px 10px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Des>Here are some of my skills on which I have been working on for the past 2 years.</Des>
        <SkillsContainer>
          {skills.map((item, index) => (
            <Skill key={index}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillImage src={skill.image} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
