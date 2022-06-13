import React from "react";
import styled from "styled-components";
import Computer from "./UI/Computer";
import Grow from "./UI/Grow";
import Hobby from "./UI/Hobby";
import Instagram from "./UI/Instagram";
import Linkedin from "./UI/Linkedin";
import Tiktok from "./UI/Tiktok";
import Github from "./UI/Github";
import Link from "next/link";

export default function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>About me</AboutTitle>
        <Subtitle>- Student majoring in web & mobile development</Subtitle>
        <Intro>
          My whole life I thought I would have a future career in economics. I
          studied economics during my secondary school and applied for business
          engineering at university. In my second year I had a course intro to
          java and I really liked it even though I failed the exam (blame it on
          the teacher lol). After my second year I decided to take 180 degrees
          turn an apply for a programming course and now 3 years later I&apos;m
          in my last year and can call myself a web developer.
        </Intro>
        <Grid>
          <Card>
            <CardTitleContainer>
              <Computer />
              <CardTitle>Technologies</CardTitle>
            </CardTitleContainer>
            <List>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>React Native (Expo)</ListItem>
              <ListItem>Next.js</ListItem>
            </List>
          </Card>
          <Card>
            <CardTitleContainer>
              <Grow />
              <CardTitle>Goals end 2022</CardTitle>
            </CardTitleContainer>
            <List>
              <ListItem>3D web with Three.js</ListItem>
              <ListItem>Blender</ListItem>
              <ListItem>Run half marathon</ListItem>
            </List>
          </Card>
          <Card>
            <CardTitleContainer>
              <Hobby />
              <CardTitle>Hobbies</CardTitle>
            </CardTitleContainer>
            <List>
              <ListItem>Cycling</ListItem>
              <ListItem>Traveling</ListItem>
              <ListItem>Running</ListItem>
              <ListItem>Fitness</ListItem>
              <ListItem>Anime</ListItem>
            </List>
          </Card>
        </Grid>
        <Socials>
          <a
            href="https://www.instagram.com/kawaicheung2/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://linkedin.com/in/ka-wai-cheung-0849ba223"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Cheung-KaWai"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.tiktok.com/@kawaiwebdev"
            target="_blank"
            rel="noreferrer"
          >
            <Tiktok />
          </a>
        </Socials>
      </AboutContent>
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #e9ecef;
`;

const AboutContent = styled.div`
  width: 100rem;
  height: 100%;
  padding: 10rem 0;
`;

const AboutTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #495057;
  position: relative;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Intro = styled.p`
  color: #495057;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
`;

const Card = styled.div`
  width: 30rem;
  height: auto;
  margin: 6rem 0;
`;

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const CardTitle = styled.h3`
  font-weight: 500;
  text-underline-offset: 5px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li``;

const Socials = styled.div`
  display: flex;
  gap: 0.5rem;
`;
