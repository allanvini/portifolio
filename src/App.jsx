import ContentContainer from "./components/contentContainer/contentContainer";
import Section from "./components/section/section";
import SectionItem from "./components/sectionItem/sectionItem";
import IconsGrid from "./components/iconsGrid/iconsGrid";
import CardsContainer from "./components/cardsContainer/cardsContainer";
import Menu from "./components/menu/menu";
import VideoBanner from "./components/videoBanner/videoBanner";
import IconsLine from "./components/iconsLine/iconsLine";
import ProjectCard from "./components/projectCard/projectCard";
import Footer from "./components/footer/footer";

import backgroundVideo from './assets/images/background.mp4';

import aboutImage from './assets/images/about.png';
import skillsImage from './assets/images/skills.png';
import contactImage from './assets/images/contact.png';

import Aws from './assets/icons/aws';
import Git from './assets/icons/git';
import Github from "./assets/icons/github";
import Java from './assets/icons/java';
import Javascript from './assets/icons/javascript';
import Linkedin from './assets/icons/linkedin';
import NextJS from './assets/icons/next';
import NodeJS from './assets/icons/node';
import ReactJS from './assets/icons/react';
import Typescript from './assets/icons/typescript';
import MongoDB from "./assets/icons/mongodb";
import Email from './assets/icons/email';
import Whatsapp from './assets/icons/whatsapp';
import Resume from "./assets/icons/resume";
import Azure from "./assets/icons/azure";
import RabbitMQ from "./assets/icons/RabbitMQ";
import Kafka from "./assets/icons/Kafka";
import PostgreSQL from "./assets/icons/Postgre";
import NestJS from "./assets/icons/nestjs";

function App() {

  return (
    <>
      <Menu />
      <ContentContainer>

        <VideoBanner video={backgroundVideo} />

        <Section id="about">
          <SectionItem>
            <h1>Oi, sou Allan Vinicius</h1>
            <p>Estudante de sistemas de informação e atualmente atuando como desenvolvedor Web Fullstack</p>
            <p>Gosto muito de jogos, desafios de logica e programação, divido meu tempo de estudos entre teoria e prática resolvendo katas no hackerrank ou no codewars</p>
            <p>
              <blockquote>
                <b>"A simplicidade é o último grau de sofisticação"</b> - Leonardo da Vinci
              </blockquote>
            </p>
          </SectionItem>
          <SectionItem>
            <img src={aboutImage} alt="" />
          </SectionItem>
        </Section>

        <Section id="skills">
          <SectionItem>
            <img src={skillsImage} alt="" />
          </SectionItem>
          <SectionItem>
            <h1>Skills</h1>
            <p>Abaixo temos algumas tecnologias com as quais eu trabalho e me sinto mais confortável hoje para desenvolver minhas aplicações</p>
            <IconsGrid>
              <Aws />
              <Git />
              <Java />
              <Javascript />
              <NodeJS />
              <Typescript />
              <ReactJS />
              <MongoDB />
              <NextJS />
              <Azure />
              <RabbitMQ />
              <Kafka />
              <NestJS />
              <PostgreSQL />
              
            </IconsGrid>
          </SectionItem>
        </Section>

        <Section id="projetos">
          <SectionItem style={{ maxWidth: '75%' }}>
            <h1>Projetos</h1>
            <p>Abaixo temos os repositórios de alguns dos projetos que ja realizei utilizando as skills citadas acima, alguns projetos não podem estar aqui pois são de código fechado.</p>
            <CardsContainer>
              <ProjectCard link="https://github.com/allanvini/video-chat-app" projectTitle="App de videoconferencia">
                <p>Uma simples aplicação que conecta usuários em uma videochamada utilizando NodeJS e Websocket</p>
              </ProjectCard>

              <ProjectCard link="https://github.com/allanvini/iticket" projectTitle="Projeto iticket (front-end)">
                <p>Projeto feito para o projeto de programação da faculdade, feito utilizando ReactJS</p>
              </ProjectCard>

              <ProjectCard link="https://github.com/allanvini/iTIcket-backend" projectTitle="Projeto iticket (back-end)">
                <p>Back-end do projeto iticket citado anteriormente, este lado da aplicação foi feito em Java utilizando o framework Spring Boot para a construção de uma API, como banco de dados foi utilizado um banco relacional SQL</p>
              </ProjectCard>

              <ProjectCard link="https://github.com/allanvini/Python-web-scraping" projectTitle="Web Scrapping">
                <p>Um web scrapping feito em Python, o objetivo desse scrapper é pegar as noticias de um portal e retorná-las através de uma API</p>
              </ProjectCard>
            </CardsContainer>
          </SectionItem>

        </Section>

        <Section id="contato">

          <SectionItem>
            <img src={contactImage} alt="" />
          </SectionItem>

          <SectionItem>
            <h1>Mais sobre mim / Contato</h1>
            <p>
              Allan Vinicius<br />
              27 anos<br />
              Natural de Campinas-SP<br />
              Residente em Hortolândia-SP<br />
              Aberto a oportunidades: <b>Sim</b><br />
            </p>
            <p>Segue abaixo os meus dados de contato juntamente com as redes sociais</p>
            <IconsLine>
              <a target="_blank" href="mailto:allanvinisilva@gmail.com">
                <Email />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/allan-vinicius-13ba4493/">
                <Linkedin />
              </a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5519992575381&text=%20">
                <Whatsapp />
              </a>
              <a target="_blank" href="https://github.com/allanvini">
                <Github />
              </a>
              <a target="_blank" href="https://drive.google.com/file/d/1ip4OGLOVZke-RBBtE6KfhzWZKBeHB0lB/view?usp=share_link">
                <Resume />
              </a>
            </IconsLine>
          </SectionItem>

        </Section>
      <Footer/>
      </ContentContainer>
    </>
  )
}

export default App
