import React from 'react';

export default function Dock({ activeSection }) {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="dock" aria-label="Navegação rápida">
      <a
        href="#inicio"
        onClick={(e) => scrollTo(e, 'inicio')}
        aria-label="Início"
        aria-current={activeSection === 'inicio' ? 'true' : undefined}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.5 17.0625H16.5M11.3046 3.21117L3.50457 8.48603C3.18802 8.7001 3 9.04666 3 9.41605V19.2882C3 20.2336 3.80589 21 4.8 21H19.2C20.1941 21 21 20.2336 21 19.2882V9.41605C21 9.04665 20.812 8.7001 20.4954 8.48603L12.6954 3.21117C12.2791 2.92961 11.7209 2.92961 11.3046 3.21117Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      </a>

      <a
        href="#sobre"
        onClick={(e) => scrollTo(e, 'sobre')}
        aria-label="Sobre"
        aria-current={activeSection === 'sobre' ? 'true' : undefined}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.0001 2.39999V5.99999C15.0001 6.66274 15.5373 7.19999 16.2001 7.19999H19.8001M8.40008 7.19999H10.8001M8.40008 10.8H15.6001M8.40008 14.4H15.6001M18.0001 4.19999C17.466 3.72214 16.9118 3.15537 16.5619 2.78727C16.3291 2.54233 16.0074 2.39999 15.6695 2.39999H6.5998C5.27432 2.39999 4.19981 3.4745 4.1998 4.79998L4.19971 19.1999C4.1997 20.5254 5.27421 21.5999 6.5997 21.5999L17.3997 21.6C18.7252 21.6 19.7997 20.5255 19.7998 19.2L19.8001 6.47783C19.8001 6.17099 19.683 5.87603 19.4701 5.65513C19.0763 5.24664 18.4187 4.57451 18.0001 4.19999Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      </a>

      <a
        href="#projetos"
        onClick={(e) => scrollTo(e, 'projetos')}
        aria-label="Projetos"
        aria-current={activeSection === 'projetos' ? 'true' : undefined}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15M6.7 9.26001L12 12.33L17.26 9.28003M12 17.77V12.32M10.76 6.29L7.56 8.07003C6.84 8.47003 6.24001 9.48002 6.24001 10.31V13.7C6.24001 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.31C17.77 9.48002 17.18 8.47003 16.45 8.07003L13.25 6.29C12.56 5.9 11.44 5.9 10.76 6.29Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      </a>

      <a
        href="#skills"
        onClick={(e) => scrollTo(e, 'skills')}
        aria-label="Habilidades"
        aria-current={activeSection === 'skills' ? 'true' : undefined}
      >
        <svg viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.75" y="0.75" width="21.5" height="18.5" rx="3.25" strokeWidth="1.5" stroke="currentColor" />
          <path d="M6.875 13.75L10.125 10.5L6.875 7.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
          <path d="M12 13.5H17" strokeLinecap="round" stroke="currentColor" />
        </svg>
      </a>

      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      </a>

      <a
        href="#contato"
        onClick={(e) => scrollTo(e, 'contato')}
        aria-label="Contato"
        aria-current={activeSection === 'contato' ? 'true' : undefined}
      >
        <svg viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45.8864 45.102L62.0498 28.9385L45.8864 12.7751M62.0498 28.9385L14.9498 28.9385C12.7407 28.9385 10.9498 30.7294 10.9498 32.9385L10.9498 60.2251"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      </a>
    </nav>
  );
}
