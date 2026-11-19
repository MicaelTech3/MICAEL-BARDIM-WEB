import React from 'react';

export default function Contact() {
  return (
    <section className="contact wrap" id="contato">
      <small className="reveal">Por enquanto é isso.</small>
      <h2 className="reveal reveal-delay-1">
        Tem um projeto em mente?
        <br />
        Vamos conversar
      </h2>
      <div className="line reveal reveal-delay-2">
        <a className="cta" href="mailto:contato@exemplo.com">
          Fale comigo
        </a>
      </div>
      <div className="info reveal reveal-delay-3">
        <div>
          <span>E-mail</span>
          contato@exemplo.com
        </div>
        <div>
          <span>Telefone</span>
          (00) 00000-0000
        </div>
      </div>
    </section>
  );
}
