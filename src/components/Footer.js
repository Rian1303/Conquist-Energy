import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h4>Contato</h4>
          <p>Email: comercial@conquistenergy.com.br</p>
          <p>Tel: (85) 99202-9902</p>
        </div>
        <div className="footer-col">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="https://wa.me/5585992029902" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/company/conquistenergy" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/conquistenergy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:comercial@conquistenergy.com.br"><FaEnvelope /></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-credit">
    <p>Site desenvolvido e mantido pela <strong>Croma Company – Dep. de Software</strong></p>
  </div>

      <div className="footer-bottom">
        <p>© 2025 Conquist Energy. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
