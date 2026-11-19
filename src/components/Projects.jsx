import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'DSignerTV — Digital Signage & TV',
    desc: 'Plataforma de mídia indoor, gestão remota de telas Android TV, agendamento de playlists e chamada de senhas.',
    tag: 'Digital Signage',
    image: '/desenvolvimentos/dsignertv.gif',
    link: 'https://dsignertv.fbard.com.br/',
    delay: '',
  },
  {
    id: 2,
    title: 'PlayAds — Rádio Indoor & Locuções com IA',
    desc: 'Central de áudio comercial para PDV com geração de locuções por inteligência artificial e agendamento de playlists.',
    tag: 'Automação Comercial',
    image: '/desenvolvimentos/PlayAds_Logo.png',
    link: 'https://playweb.fbard.com.br/',
    delay: 'reveal-delay-1',
  },
  {
    id: 3,
    title: 'System Stock — Gestão Inteligente de Estoque',
    desc: 'Sistema multi-setorial de estoque com terminal de requisições, controle de validade e inteligência analítica.',
    tag: 'Gestão & Analytics',
    image: '/desenvolvimentos/system stock.png',
    link: 'https://systemstock.fbard.com.br/',
    delay: 'reveal-delay-2',
  },
  {
    id: 4,
    title: 'Foodly — Cardápio Digital & Autoatendimento',
    desc: 'Plataforma para restaurantes com pedidos por Totem e QR Code na mesa, personalização de pratos e gestão de comandas.',
    tag: 'Food Service & Totem',
    image: '/desenvolvimentos/Foodly-logo.png',
    link: 'https://foodly.fbard.com.br/',
    delay: 'reveal-delay-3',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="head reveal">
        <h2>Projetos em destaque</h2>
        <p>Sistemas e plataformas reais desenvolvidos para automação comercial, gestão e entretenimento corporativo.</p>
      </div>

      <div className="grid">
        {projectsData.map((project) => (
          <a
            key={project.id}
            className={`card reveal ${project.delay}`}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="thumb">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <b>{project.tag}</b>
              )}
            </div>
            <div className="t">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.97177 14.2759C7.93427 14.6884 8.23827 15.0532 8.65079 15.0907C9.0633 15.1282 9.42811 14.8242 9.46561 14.4117L8.71869 14.3438L7.97177 14.2759ZM9.18744 9.18748L9.11954 8.44056C8.75898 8.47334 8.4733 8.75901 8.44052 9.11958L9.18744 9.18748ZM14.4116 9.46565C14.8241 9.42815 15.1281 9.06334 15.0906 8.65083C15.0531 8.23831 14.6883 7.93431 14.2758 7.97181L14.3437 8.71873L14.4116 9.46565ZM14.2822 15.3428C14.575 15.6357 15.0499 15.6357 15.3428 15.3428C15.6357 15.05 15.6357 14.5751 15.3428 14.2822L14.8125 14.8125L14.2822 15.3428ZM8.71869 14.3438L9.46561 14.4117L9.93436 9.25538L9.18744 9.18748L8.44052 9.11958L7.97177 14.2759L8.71869 14.3438ZM9.18744 9.18748L9.25534 9.9344L14.4116 9.46565L14.3437 8.71873L14.2758 7.97181L9.11954 8.44056L9.18744 9.18748ZM9.18744 9.18748L8.65711 9.71781L14.2822 15.3428L14.8125 14.8125L15.3428 14.2822L9.71777 8.65715L9.18744 9.18748ZM12 3V3.75C16.5563 3.75 20.25 7.44365 20.25 12H21H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3ZM21 12H20.25C20.25 16.5563 16.5563 20.25 12 20.25V21V21.75C17.3848 21.75 21.75 17.3848 21.75 12H21ZM12 21V20.25C7.44365 20.25 3.75 16.5563 3.75 12H3H2.25C2.25 17.3848 6.61522 21.75 12 21.75V21ZM3 12H3.75C3.75 7.44365 7.44365 3.75 12 3.75V3V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3Z"
                  fill="currentColor"
                />
              </svg>
              <span>{project.title}</span>
            </div>
            {project.desc && <p className="card-desc">{project.desc}</p>}
          </a>
        ))}
      </div>

      <a
        className="more reveal"
        href="https://github.com/MicaelTech3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver mais no GitHub
      </a>
    </section>
  );
}
