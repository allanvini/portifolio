import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#inicio">Allan Vinicius<span>.</span></a>
        <p>Feito com intenção. E um pouco de código.</p>
        <a className="back-to-top" href="#inicio">
          De volta ao topo <Icon name="down" />
        </a>
        <span className="copyright">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
