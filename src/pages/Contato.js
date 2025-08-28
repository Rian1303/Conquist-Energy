import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";


function Contato() {
  const whatsappLink = "https://wa.me/5585992029902"; // substitua pelo seu número
  const linkedinLink = "https://www.linkedin.com/company/conquist-energy/"; 
  const instagramLink = "https://www.instagram.com/conquistenergy2";
  const emailLink = "mailto:comercial@conquistenergy.com.br";

  return (
    <section id="contato" className="contato">
      <h2 className="section-title">Contato</h2>
      <p>Entre em contato conosco pelos canais abaixo:</p>
      
      <div className="contato-buttons">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-contato whatsapp">
          <FaWhatsapp size={24} /> WhatsApp
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="btn-contato linkedin">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="btn-contato instagram">
          <FaInstagram size={24} /> Instagram
        </a>
        <a href={emailLink} className="btn-contato email">
          <FaEnvelope size={24} /> E-mail
        </a>
      </div>
    </section>
  );
}

export default Contato;
