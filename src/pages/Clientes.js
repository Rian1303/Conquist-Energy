import React from "react";
import cliente1 from '../assets/images/cliente1.png';
import cliente2 from '../assets/images/cliente2.png';
import cliente3 from '../assets/images/cliente3.png';
import cliente4 from '../assets/images/cliente4.png';
import cliente5 from '../assets/images/cliente5.png';
import cliente6 from '../assets/images/cliente6.png';
import cliente7 from '../assets/images/cliente7.png';
import cliente8 from '../assets/images/cliente8.png';

function Clientes() {
  const clientes = [
    { nome: "Ms Serviços", logo: cliente1 },
    { nome: "Grupo7", logo: cliente2 },
    { nome: "L2M PowerEletronics", logo: cliente3 },
    { nome: "3p Energia", logo: cliente4 },
    { nome: "GDSUN", logo: cliente5 },
    { nome: "Quality Servicy Renovaveis", logo: cliente6 },
    { nome: "WindCraft", logo: cliente7 },
    { nome: "Helexia", logo: cliente8 },
  ];

  return (
    <section id="clientes" className="clientes">
      <h2 className="section-title">Nossos Clientes</h2>
      <p>Empresas e pessoas que confiam na Conquist Energy para soluções de energia limpa e eficiente.</p>
      <div className="clientes-grid">
        {clientes.map((cliente, index) => (
          <div key={index} className="cliente-card">
            <img src={cliente.logo} alt={cliente.nome} />
            <p className="cliente-nome">{cliente.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clientes;
