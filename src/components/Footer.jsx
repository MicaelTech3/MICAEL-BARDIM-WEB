import React from 'react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    const el = document.getElementById('inicio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="row reveal">
        <p>seu criador de boas ideias</p>
        <a
          className="arr"
          href="#inicio"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
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
      </div>
      <div className="name reveal reveal-delay-1">Micael Bardim</div>
    </footer>
  );
}
