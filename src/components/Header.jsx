import { useEffect, useRef, useState } from 'react';
import { navigationLinks } from '../data/portfolio';
import Icon from './Icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuButtonRef = useRef(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 },
    );

    document.querySelectorAll('main > section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Allan Vinicius — início"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            av<span>.</span>
          </span>
          <span className="brand-name">
            Allan Vinicius
            <span>Desenvolvedor fullstack</span>
          </span>
        </a>

        <button
          ref={menuButtonRef}
          id="menu-toggle"
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} />
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`navigation ${isMenuOpen ? 'is-open' : ''}`}
        >
          {navigationLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="header-contact" href="#contato" onClick={closeMenu}>
            Vamos conversar <Icon />
          </a>
        </nav>
      </div>
    </header>
  );
}
