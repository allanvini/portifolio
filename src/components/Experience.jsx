import { experiences } from '../data/portfolio';
import Icon from './Icon';
import Tags from './Tags';

export default function Experience() {
  return (
    <section
      className="experience-section section-space"
      id="trajetoria"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-number">03 /</span> TRAJETÓRIA
            </p>
            <h2 id="experience-title">
              Cada desafio,<br /><em>um novo passo.</em>
            </h2>
          </div>
          <p className="section-intro">
            As experiências que fazem parte de quem sou.<br />
            Da mais recente aos primeiros passos.
          </p>
        </div>

        <div className="experience-grid">
          <ol className="experience-timeline" role="list" aria-label="Experiências profissionais, da mais recente à mais antiga">
            {experiences.map((experience) => (
              <li className="experience-item" key={experience.id}>
                <article aria-labelledby={`${experience.id}-title`}>
                  <div className="experience-heading">
                    <div>
                      <p className="experience-period">
                        <time dateTime={experience.startDate}>{experience.startLabel}</time>
                        <span aria-hidden="true"> — </span>
                        <span className="visually-hidden"> até </span>
                        <time dateTime={experience.endDate}>{experience.endLabel}</time>
                      </p>
                      <h3 id={`${experience.id}-title`}>{experience.company}</h3>
                      <p className="experience-role">{experience.role}</p>
                    </div>
                    <span className={`experience-logo experience-logo--${experience.id}`}>
                      <img
                        src={experience.logo}
                        alt=""
                        width="130"
                        height="68"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                  <p className="experience-description">{experience.description}</p>
                  <Tags
                    items={experience.technologies}
                    label={`Tecnologias na ${experience.company}`}
                  />
                </article>
              </li>
            ))}
          </ol>

          <article className="next-project next-opportunity" aria-labelledby="next-opportunity-title">
            <span className="next-label">
              <span className="note-dot" /> HÁ MAIS CAMINHO PELA FRENTE
            </span>
            <div className="next-project-art" aria-hidden="true">
              <span>+</span><i /><i />
            </div>
            <div className="next-project-copy">
              <span className="eyebrow">ESPAÇO PARA O QUE VEM</span>
              <h3 id="next-opportunity-title">
                O próximo<br /><em>desafio.</em>
              </h3>
              <p>
                Novas equipes, outros aprendizados.<br />
                A próxima experiência tem espaço aqui.
              </p>
            </div>
            <div className="next-project-footer">
              <a className="opportunity-link" href="#contato">
                Vamos conversar <Icon />
              </a>
              <span aria-hidden="true">… /</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
