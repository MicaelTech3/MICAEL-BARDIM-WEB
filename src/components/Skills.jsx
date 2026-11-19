import React from 'react';

const skillsData = [
  {
    title: 'Suporte de TI & Infraestrutura',
    desc: 'Atendimento e suporte técnico, diagnóstico de hardware e sistemas, configuração de redes locais e resolução prática de chamados.',
    chips: ['Hardware', 'Windows', 'Redes', 'Diagnósticos', 'Suporte'],
    delay: '',
  },
  {
    title: 'Desenvolvimento Web',
    desc: 'Criação de interfaces web responsivas, componentes práticos e telas dinâmicas para soluções do dia a dia.',
    chips: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite'],
    delay: 'reveal-delay-1',
  },
  {
    title: 'Ferramentas & Integrações',
    desc: 'Uso de versionamento para controle de código e serviços em nuvem para bancos de dados em tempo real e autenticação.',
    chips: ['Git', 'GitHub', 'Firebase', 'APIs REST'],
    delay: 'reveal-delay-2',
  },
  {
    title: 'Formação & Aprendizado Contínuo',
    desc: 'Graduando em Análise e Desenvolvimento de Sistemas, fortalecendo a base teórica e buscando aprender algo novo diariamente.',
    chips: ['ADS', 'Lógica', 'Resolução de Problemas', 'Evolução Contínua'],
    delay: 'reveal-delay-3',
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <h2 className="reveal">O que pratico no dia a dia</h2>
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
