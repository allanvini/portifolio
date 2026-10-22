import { useEffect, useRef, useState } from 'react';
import { CONTACT_EMAIL, socialLinks } from '../data/portfolio';
import Icon from './Icon';

const COPY_SUCCESS_MESSAGE = 'E-mail copiado!';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const copyTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus(COPY_SUCCESS_MESSAGE);
    } catch {
      setCopyStatus('Selecione o endereço acima para copiar.');
    }

    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopyStatus(''), 4000);
  }

  return (
    <section className="contact-section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div className="contact-top">
          <p className="eyebrow">
            <span className="section-number">05 /</span> VAMOS CONVERSAR
          </p>
          <Icon name="asterisk" className="contact-star" />
        </div>
        <div className="contact-heading">
          <h2 id="contact-title">
            Boas ideias começam<br />com uma <em>conversa.</em>
          </h2>
          <p>
            Tem um projeto em mente, uma oportunidade<br className="desktop-break" />
            {' '}ou só quer trocar uma ideia? Me chama.
          </p>
        </div>
        <div className="contact-bottom">
          <div className="email-block">
            <span className="contact-label">ESCREVA PARA MIM</span>
            <div className="email-actions">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}<Icon /></a>
              <button
                type="button"
                className="copy-email"
                onClick={copyEmail}
                aria-label="Copiar endereço de e-mail"
                title="Copiar e-mail"
              >
                <Icon name={copyStatus === COPY_SUCCESS_MESSAGE ? 'check' : 'copy'} />
              </button>
            </div>
            <span role="status" className="copy-status">{copyStatus}</span>
          </div>
          <div className="social-links" aria-label="Redes sociais">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} — abre em uma nova aba`}
              >
                <Icon name={link.icon} />
                {link.name}
                <Icon className="social-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
