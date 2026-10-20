import Icon from './Icon';
import SystemIllustration from './SystemIllustration';

export default function Hero() {
  return (
    <section className="hero container" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="small-line" /> IDEIAS, CÓDIGO E PROPÓSITO
        </p>
        <h1 id="hero-title">
          Da ideia<br />
          ao que <em>funciona.</em>
        </h1>
        <p className="hero-description">
          Sou <strong>Allan Vinicius</strong>, desenvolvedor fullstack.
          <br className="desktop-break" /> Conecto interfaces, APIs e dados para
          transformar ideias em aplicações web.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projetos">
            Explore meu trabalho <Icon name="down" />
          </a>
          <a className="text-link" href="#sobre">
            Um pouco sobre mim <Icon />
          </a>
        </div>
        <div className="hero-note">
          <span className="note-dot" />
          <span>Curiosidade para entender. Código para resolver.</span>
        </div>
      </div>

      <SystemIllustration />

      <div className="hero-baseline">
        <span>DO FRONT AO BACK. COM ATENÇÃO A CADA DETALHE.</span>
        <a href="#projetos">
          CONTINUE EXPLORANDO <Icon name="down" />
        </a>
      </div>
    </section>
  );
}
