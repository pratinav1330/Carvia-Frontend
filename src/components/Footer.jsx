import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">Carvia</div>
          <p className="footer__text">Aggregating jobs from across the web.</p>
        </div>
        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__link">
            GitHub
          </a>
          <span className="footer__link">
            © {new Date().getFullYear()} Carvia
          </span>
        </div>
      </div>
    </footer>
  );
}
