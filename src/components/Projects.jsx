import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 3rem;
  background: #fff;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProjectCard = styled.div`
  display: inline-block;
  margin: 1rem;
  padding: 1.5rem;
  background: #f4f4f4;
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const Project = ({ title, description }) => (
  <ProjectCard>
    <h3>{title}</h3>
    <p>{description}</p>
  </ProjectCard>
);

const Projects = () => {
  const projectData = [
    { title: 'Book Store 📚', description: 'An e-commerce web app that allows users to browse, search, and purchase books. It includes features like user authentication, a shopping cart.' },
    { title: 'Weather Web App 💻', description: 'A dynamic and responsive web app that provides various functionalities (such as task management, real-time data, or interactive content) with a smooth and user-friendly interface.' },
    { title: 'Tic-Tac-Toe App ❌⭕️', description: 'A simple and interactive two-player Tic-Tac-Toe game built with React. Players can compete on a dynamic game board, with automatic detection of winners' },
    { title: 'Real-Time Tracking System 🚗📍', description: 'A real-time GPS tracking system that displays live location updates on an interactive map, ideal for tracking assets, vehicles, or individuals in real-time.' },
    {title: 'To-Do Application 📝✅',
description: 'A user-friendly to-do list app built with React, allowing users to add, edit, delete, and mark tasks as completed, with persistent local storage for task management.'
},

{
title: 'Currency Converter 💱🌍',description: 'A responsive currency converter app that fetches real-time exchange rates from an API and allows users to convert between multiple currencies with ease.'
}
  ];

  return (
    <ProjectsSection>
      <ProjectsTitle>My Projects</ProjectsTitle>
      <div>
        {projectData.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </ProjectsSection>
  );
};

export default Projects;
