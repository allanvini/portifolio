import { useEffect, useRef, useState } from 'react';

const EMAIL = 'allanvinisilva@gmail.com';
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/allanvini', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/allan-vinicius-13ba4493/', icon: 'linkedin' },
  { name: 'WhatsApp', href: 'https://wa.me/5519992575381', icon: 'message' },
];
const technologies = [
  { title: 'Front-end', description: 'Interfaces claras, responsivas e pensadas para quem usa.', items: ['React', 'Next.js', 'TypeScript', 'JavaScript'], icon: 'window' },
  { title: 'Back-end & dados', description: 'A lógica e as conexões que fazem a aplicação acontecer.', items: ['Node.js', 'NestJS', 'Java', 'PostgreSQL', 'MongoDB'], icon: 'layers' },
  { title: 'Infra & integrações', description: 'Serviços, mensagens e ferramentas que conectam o todo.', items: ['AWS', 'Azure', 'RabbitMQ', 'Kafka', 'Git'], icon: 'nodes' },
];

function Icon({ name = 'arrow', className = '', ...props }) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    right: <path d="M4 12h16m-6-6 6 6-6 6" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    window: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18m-13-3h.01M11 6h.01" /></>,
    layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
    nodes: <><rect x="9" y="3" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 9v4m-7 3v-3h14v3" /></>,
    copy: <><rect x="9" y="9" width="11" height="12" rx="2" /><path d="M15 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 7h16M4 17h16" />,
    close: <path d="m5 5 14 14M5 19 19 5" />,
    github: <path d="M9 20c-4 1-4-2-6-2m12 4v-4a3.5 3.5 0 0 0-1-2.5c3-.3 6-1.4 6-6A4.8 4.8 0 0 0 18.7 6 4.5 4.5 0 0 0 18.5 2S17.3 1.7 15 3.3a13 13 0 0 0-6 0C6.7 1.7 5.5 2 5.5 2A4.5 4.5 0 0 0 5.3 6 4.8 4.8 0 0 0 4 9.5c0 4.6 3 5.7 6 6A3.5 3.5 0 0 0 9 18v4" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    message: <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5Z" />,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`icon ${className}`} {...props}>{paths[name] || paths.arrow}</svg>;
}

function SystemIllustration() {
  return (
    <div className="system-illustration" role="img" aria-label="Do front-end ao back-end: interfaces, lógica e dados conectados em uma aplicação.">
      <div className="system-top" aria-hidden="true"><span><i /> VISÃO DO TODO</span><span>AV / 01</span></div>
      <div className="system-orbit" aria-hidden="true" />
      <div className="system-stack" aria-hidden="true">
        <div className="system-layer layer-interface"><span className="layer-icon"><Icon name="window" /></span><div><span className="layer-kicker">O QUE VOCÊ VÊ</span><strong>Interface</strong></div><span className="layer-number">01</span></div>
        <div className="system-connector"><i /><span>interação</span></div>
        <div className="system-layer layer-logic"><span className="layer-icon"><Icon name="layers" /></span><div><span className="layer-kicker">O QUE FAZ ACONTECER</span><strong>Lógica</strong></div><span className="layer-number">02</span></div>
        <div className="system-connector"><i /><span>conexão</span></div>
        <div className="system-layer layer-data"><span className="layer-icon"><Icon name="nodes" /></span><div><span className="layer-kicker">O QUE SUSTENTA</span><strong>Dados</strong></div><span className="layer-number">03</span></div>
      </div>
      <div className="system-bottom" aria-hidden="true"><span>PARTES QUE SE CONECTAM.</span><span>Um produto que faz sentido.</span></div>
      <span className="system-spark" aria-hidden="true">✳</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const copyTimer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus('E-mail copiado!');
    } catch {
      setCopyStatus('Selecione o endereço acima para copiar.');
    }
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopyStatus(''), 4000);
  }

  const navLinks = [
    { id: 'projetos', label: 'Projetos' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'skills', label: 'Tecnologias' },
  ];

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Allan Vinicius — início" onClick={() => setMenuOpen(false)}><span className="brand-mark" aria-hidden="true">av<span>.</span></span><span className="brand-name">Allan Vinicius<span>Desenvolvedor fullstack</span></span></a>
          <button id="menu-toggle" className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
          <nav id="main-navigation" aria-label="Navegação principal" className={`navigation ${menuOpen ? 'is-open' : ''}`}>
            {navLinks.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="header-contact" href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar <Icon /></a>
          </nav>
        </div>
      </header>

      <main id="conteudo" tabIndex="-1">
        <section className="hero container" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-line" /> IDEIAS, CÓDIGO E PROPÓSITO</p>
            <h1 id="hero-title">Da ideia<br />ao que <em>funciona.</em></h1>
            <p className="hero-description">Sou <strong>Allan Vinicius</strong>, desenvolvedor fullstack.<br className="desktop-break" /> Conecto interfaces, APIs e dados para transformar ideias em aplicações web.</p>
            <div className="hero-actions"><a className="button button-dark" href="#projetos">Explore meu trabalho <Icon name="down" /></a><a className="text-link" href="#sobre">Um pouco sobre mim <Icon /></a></div>
            <div className="hero-note"><span className="note-dot" /><span>Curiosidade para entender. Código para resolver.</span></div>
          </div>
          <SystemIllustration />
          <div className="hero-baseline"><span>DO FRONT AO BACK. COM ATENÇÃO A CADA DETALHE.</span><a href="#projetos">CONTINUE EXPLORANDO <Icon name="down" /></a></div>
        </section>

        <section className="projects-section section-space" id="projetos" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow"><span className="section-number">01 /</span> TRABALHO EM DESTAQUE</p><h2 id="projects-title">Ideias que ganham<br /><em>vida.</em></h2></div><p className="section-intro">Um projeto para conhecer de perto.<br />E espaço para as próximas ideias.</p></div>
            <div className="projects-grid">
              <a className="featured-project" href="https://analyzai.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Conhecer AnalyzAI — abre em uma nova aba">
                <div className="project-image"><img src="/images/analyzai-og.png" width="1200" height="630" alt="AnalyzAI — monitoramento industrial com inteligência artificial" loading="lazy" decoding="async" /><span className="project-image-label">PROJETO / 01</span><span className="project-image-arrow"><Icon /></span></div>
                <div className="project-content"><div className="project-heading"><h3>AnalyzAI</h3><span className="project-category">PLATAFORMA WEB</span></div><p>Dados de vibração, telemetria e inteligência artificial conectados para apoiar a manutenção preditiva de máquinas industriais.</p><ul className="tags" aria-label="Tecnologias do AnalyzAI"><li>React</li><li>TypeScript</li><li>Node.js</li><li>PostgreSQL</li></ul><div className="project-footer"><span>Conhecer o projeto <Icon name="right" /></span><span>analyzai.com.br <Icon /></span></div></div>
              </a>
              <article className="next-project" aria-labelledby="next-project-title"><span className="next-label"><span className="note-dot" /> AINDA HÁ MUITO PARA CRIAR</span><div className="next-project-art" aria-hidden="true"><span>+</span><i /><i /></div><div className="next-project-copy"><span className="eyebrow">ESPAÇO PARA O QUE VEM</span><h3 id="next-project-title">O próximo<br /><em>capítulo.</em></h3><p>Novas ideias, outros desafios.<br />Em breve, mais projetos por aqui.</p></div><div className="next-project-footer"><span>EM EVOLUÇÃO CONSTANTE</span><span aria-hidden="true">02 / …</span></div></article>
            </div>
          </div>
        </section>

        <section className="about-section section-space container" id="sobre" aria-labelledby="about-title">
          <div className="about-title"><p className="eyebrow"><span className="section-number">02 /</span> ALÉM DO CÓDIGO</p><h2 id="about-title">Prazer,<br /><em>Allan.</em></h2><span className="about-asterisk" aria-hidden="true">✳</span></div>
          <div className="about-content"><p className="about-lead">Gosto de entender como as coisas funcionam. E de encontrar um jeito mais simples de fazê-las funcionar melhor.</p><div className="about-text"><p>Sou desenvolvedor fullstack e gosto de participar da construção de uma aplicação por inteiro: da experiência na interface às regras de negócio, APIs e dados.</p><p>Jogos, desafios de lógica e programação alimentam minha curiosidade. Entre teoria e prática, sigo aprendendo, experimentando e refinando a forma como construo software.</p></div><div className="principles"><div><span>01</span><h3>Entender primeiro.</h3><p>O problema orienta a solução.</p></div><div><span>02</span><h3>Construir com clareza.</h3><p>Simplicidade em cada escolha.</p></div><div><span>03</span><h3>Continuar aprendendo.</h3><p>Sempre há como ir além.</p></div></div></div>
        </section>

        <section className="skills-section section-space" id="skills" aria-labelledby="skills-title"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span className="section-number">03 /</span> REPERTÓRIO TÉCNICO</p><h2 id="skills-title">As ferramentas<br /><em>de cada solução.</em></h2></div><p className="section-intro">Tecnologias com as quais trabalho,<br />organizadas pelo que ajudam a construir.</p></div><div className="technology-list">{technologies.map((group) => <article className="technology-row" key={group.title}><div className="technology-title"><span className="technology-icon"><Icon name={group.icon} /></span><h3>{group.title}</h3></div><p>{group.description}</p><ul className="tags" aria-label={`Tecnologias de ${group.title}`}>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title"><div className="container contact-inner"><div className="contact-top"><p className="eyebrow"><span className="section-number">04 /</span> VAMOS CONVERSAR</p><span className="contact-star" aria-hidden="true">✳</span></div><div className="contact-heading"><h2 id="contact-title">Boas ideias começam<br />com uma <em>conversa.</em></h2><p>Tem um projeto em mente, uma oportunidade<br className="desktop-break" /> ou só quer trocar uma ideia? Me chama.</p></div><div className="contact-bottom"><div className="email-block"><span className="contact-label">ESCREVA PARA MIM</span><div className="email-actions"><a href={`mailto:${EMAIL}`}>{EMAIL}<Icon /></a><button type="button" className="copy-email" onClick={copyEmail} aria-label="Copiar endereço de e-mail" title="Copiar e-mail"><Icon name={copyStatus === 'E-mail copiado!' ? 'check' : 'copy'} /></button></div><span role="status" className="copy-status">{copyStatus}</span></div><div className="social-links" aria-label="Redes sociais">{socialLinks.map((link) => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} — abre em uma nova aba`}><Icon name={link.icon} />{link.name}<Icon className="social-arrow" /></a>)}</div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a className="footer-brand" href="#inicio">Allan Vinicius<span>.</span></a><p>Feito com intenção. E um pouco de código.</p><a className="back-to-top" href="#inicio">De volta ao topo <Icon name="down" /></a><span className="copyright">© {new Date().getFullYear()}</span></div></footer>
    </>
  );
}

export default App;
