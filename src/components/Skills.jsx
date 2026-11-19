import React from 'react';

const skillsData = [
  {
    title: 'Front-end',
    desc: 'Interfaces envolventes e fáceis de usar, feitas com frameworks modernos.',
    chips: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
    delay: '',
  },
  {
    title: 'Estilo e design',
    desc: 'Visuais bonitos e responsivos, com ferramentas atuais de estilização.',
    chips: ['Tailwind', 'Sass', 'Figma'],
    delay: 'reveal-delay-1',
  },
  {
    title: 'Linguagens de programação',
    desc: 'Resolução de problemas e estruturas de dados aplicadas na prática.',
    chips: ['Python', 'C', 'Java'],
    delay: 'reveal-delay-2',
  },
  {
    title: 'Back-end',
    desc: 'Lógica de servidor e APIs robustas para aplicações dinâmicas.',
    chips: ['Node.js', 'Express', 'APIs REST'],
    delay: 'reveal-delay-3',
  },
  {
    title: 'Banco de dados',
    desc: 'Dados armazenados com segurança e recuperados com eficiência.',
    chips: ['PostgreSQL', 'MongoDB', 'Firebase'],
    delay: '',
  },
  {
    title: 'Versionamento e colaboração',
    desc: 'Gestão de código e trabalho em equipe sem atrito.',
    chips: ['Git', 'GitHub', 'Code review'],
    delay: 'reveal-delay-1',
  },
  {
    title: 'UI/UX',
    desc: 'Interfaces intuitivas, agradáveis e fáceis de navegar.',
    chips: ['Prototipação', 'Wireframes'],
    delay: 'reveal-delay-2',
  },
  {
    title: 'Desenvolvimento pessoal',
    desc: 'Aprendizado contínuo e crescimento em equipe.',
    chips: ['Comunicação', 'Organização', 'Liderança'],
    delay: 'reveal-delay-3',
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <h2 className="reveal">Habilidades que movem minha paixão</h2>
        <div className="cols">
          {skillsData.map((sk, index) => (
            <div key={index} className={`sk reveal ${sk.delay}`}>
              <div className="chips">
                {sk.chips.map((chip, cIdx) => (
                  <span key={cIdx}>{chip}</span>
                ))}
              </div>
              <h3>{sk.title}</h3>
              <p>{sk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
