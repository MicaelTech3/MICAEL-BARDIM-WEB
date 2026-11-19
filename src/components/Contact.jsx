import React from 'react';

export default function Contact() {
  return (
    <section className="contact wrap" id="contato">
      <small className="reveal">Vamos criar algo incrível juntos?</small>
      <h2 className="reveal reveal-delay-1">
        Tem um projeto em mente?
        <br />
        Vamos conversar
      </h2>
      <div className="line reveal reveal-delay-2">
        <a className="cta" href="mailto:micaelbardimtech@gmail.com">
          Fale comigo
        </a>
      </div>
      <div className="info reveal reveal-delay-3">
        <div>
          <span>E-mail</span>
          <a href="mailto:micaelbardimtech@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
            micaelbardimtech@gmail.com
          </a>
        </div>
        <div>
          <span>Telefone</span>
          <a href="https://wa.me/5554997124880" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            (54) 99712-4880
          </a>
        </div>
        <div>
          <span>LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/micael-bardim-9549513a1/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Micael Bardim
          </a>
        </div>
        <div>
          <span>Instagram</span>
          <a
            href="https://www.instagram.com/micaeltech3/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            @micaeltech3
          </a>
        </div>
      </div>
    </section>
  );
}
