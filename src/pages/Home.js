import React from "react";
import heroImage from '../assets/images/hero-workers.jpg';
import logo from '../assets/images/conquist-logo.png';

function Home() {
  const whatsappLink = "https://wa.me/5585992029902";

  return (
    <main>
      <section 
        id="home"
        className="hero" 
        style={{ backgroundImage: `url(${heroImage})` }}
        role="banner"
        aria-label="Seção inicial - Conquist Energy"
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <img 
            src={logo} 
            alt="Logo Conquist Energy" 
            className="hero-logo" 
          />

          <h1>Bem-vindo à Conquist Energy!</h1>
          <p>
            Sua independência energética começa aqui. Descubra soluções de energia limpa e eficiente
            para residências e empresas, projetadas para o futuro.
          </p>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Solicite seu orçamento via WhatsApp"
          >
            <button className="btn-primary">Solicite seu Orçamento</button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
