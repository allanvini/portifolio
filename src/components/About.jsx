import Icon from './Icon';

export default function About() {
  return (
    <section
      className="about-section section-space container"
      id="sobre"
      aria-labelledby="about-title"
    >
      <div className="about-title">
        <p className="eyebrow">
          <span className="section-number">02 /</span> ALÉM DO CÓDIGO
        </p>
        <h2 id="about-title">Prazer,<br /><em>Allan.</em></h2>
        <Icon name="asterisk" className="about-asterisk" />
      </div>
      <div className="about-content">
        <p className="about-lead">
          Gosto de entender como as coisas funcionam. E de encontrar um jeito mais
          simples de fazê-las funcionar melhor.
        </p>
        <div className="about-text">
          <p>
            Sou desenvolvedor fullstack e gosto de participar da construção de uma
            aplicação por inteiro: da experiência na interface às regras de
            negócio, APIs e dados.
          </p>
          <p>
            Jogos, desafios de lógica e programação alimentam minha curiosidade.
            Entre teoria e prática, sigo aprendendo, experimentando e refinando a
            forma como construo software.
          </p>
        </div>
        <div className="principles">
          <div>
            <span>01</span>
            <h3>Entender primeiro.</h3>
            <p>O problema orienta a solução.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Construir com clareza.</h3>
            <p>Simplicidade em cada escolha.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Continuar aprendendo.</h3>
            <p>Sempre há como ir além.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
