import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../Card/ProjectCard/index";
import { Link as RouterLink } from "react-router-dom";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0px 100px 0;
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

const ToggleGroup = styled.div`
  display: flex;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  ${({ active, theme }) =>
    active &&
    `background-color:${theme.primary + 20};
`}
  &:hover {
    background-color: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;
const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
const Link = styled(RouterLink)`
  text-decoration: none; /* Remove underline */
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Des>Here are some of my projects that i have worked on.</Des>
        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("all")}>All</ToggleButton>
          )}
          <Divider />
          {toggle === "frontend" ? (
            <ToggleButton active onClick={() => setToggle("frontend")}>
              Frontend
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("frontend")}>
              Frontend
            </ToggleButton>
          )}
          <Divider />
          {toggle === "backend" ? (
            <ToggleButton active onClick={() => setToggle("backend")}>
              Backend
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("backend")}>
              Backend
            </ToggleButton>
          )}
          <Divider />
          {toggle === "fullStack" ? (
            <ToggleButton active onClick={() => setToggle("fullStack")}>
              Full Stack
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("fullStack")}>
              Full Stack
            </ToggleButton>
          )}
          <Divider />
          {toggle === "design" ? (
            <ToggleButton active onClick={() => setToggle("design")}>
              Design
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("design")}>
              design
            </ToggleButton>
          )}
        </ToggleGroup>
        <ProjectsContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <Link to={project.Link} target="_blank">
                <ProjectCard key={index} project={project} />
              </Link>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <Link to={project.Link} target="_blank">
                <ProjectCard key={index} project={project} />
              </Link>
            ))}
        </ProjectsContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
