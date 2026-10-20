import { technologyGroups } from '../data/portfolio';
import Icon from './Icon';
import Tags from './Tags';

export default function Technologies() {
  return (
    <section
      className="skills-section section-space"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-number">03 /</span> REPERTÓRIO TÉCNICO
            </p>
            <h2 id="skills-title">
              As ferramentas<br /><em>de cada solução.</em>
            </h2>
          </div>
          <p className="section-intro">
            Tecnologias com as quais trabalho,<br />
            organizadas pelo que ajudam a construir.
          </p>
        </div>
        <div className="technology-list">
          {technologyGroups.map((group) => (
            <article className="technology-row" key={group.title}>
              <div className="technology-title">
                <span className="technology-icon"><Icon name={group.icon} /></span>
                <h3>{group.title}</h3>
              </div>
              <p>{group.description}</p>
              <Tags items={group.items} label={`Tecnologias de ${group.title}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
