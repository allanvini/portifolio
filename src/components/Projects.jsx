import { featuredProject } from '../data/portfolio';
import Icon from './Icon';
import Tags from './Tags';

export default function Projects() {
  return (
    <section
      className="projects-section section-space"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-number">01 /</span> TRABALHO EM DESTAQUE
            </p>
            <h2 id="projects-title">
              Ideias que ganham<br /><em>vida.</em>
            </h2>
          </div>
          <p className="section-intro">
            Um projeto para conhecer de perto.<br />
            E espaço para as próximas ideias.
          </p>
        </div>

        <div className="projects-grid">
          <a
            className="featured-project"
            href={featuredProject.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conhecer ${featuredProject.name} — abre em uma nova aba`}
          >
            <div className="project-image">
              <img
                src={featuredProject.image}
                width="1200"
                height="630"
                alt={featuredProject.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <span className="project-image-label">PROJETO / 01</span>
              <span className="project-image-arrow"><Icon /></span>
            </div>
            <div className="project-content">
              <div className="project-heading">
                <h3>{featuredProject.name}</h3>
                <span className="project-category">PLATAFORMA WEB</span>
              </div>
              <p>{featuredProject.description}</p>
              <Tags
                items={featuredProject.technologies}
                label={`Tecnologias do ${featuredProject.name}`}
              />
              <div className="project-footer">
                <span>Conhecer o projeto <Icon name="right" /></span>
                <span>{featuredProject.domain} <Icon /></span>
              </div>
            </div>
          </a>

          <article className="next-project" aria-labelledby="next-project-title">
            <span className="next-label">
              <span className="note-dot" /> AINDA HÁ MUITO PARA CRIAR
            </span>
            <div className="next-project-art" aria-hidden="true">
              <span>+</span><i /><i />
            </div>
            <div className="next-project-copy">
              <span className="eyebrow">ESPAÇO PARA O QUE VEM</span>
              <h3 id="next-project-title">
                O próximo<br /><em>capítulo.</em>
              </h3>
              <p>Novas ideias, outros desafios.<br />Em breve, mais projetos por aqui.</p>
            </div>
            <div className="next-project-footer">
              <span>EM EVOLUÇÃO CONSTANTE</span>
              <span aria-hidden="true">02 / …</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
