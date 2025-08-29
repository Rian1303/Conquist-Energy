import React, { useState } from "react";
import { FaSolarPanel, FaProjectDiagram, FaChartLine } from "react-icons/fa";

// Serviços filtrados: Energia Solar Residencial, Geração Distribuída, O&M
const services = [
  {
    id: 1,
    title: "Energia Solar Residencial",
    description: "Soluções sustentáveis para residências, reduzindo custos e aumentando a eficiência.",
    details: {
      resumo: "Sistemas fotovoltaicos residenciais sob medida que aumentam a economia e valorizam seu imóvel.",
      ultimos: "Projetamos e executamos sistemas para diversas residências, incluindo clientes em áreas urbanas e rurais. Entre eles estão o Supermercado ODaniel, em Itapipoca - CE, a Farmacia Dr Jobson em Maracanau - CE, além de muitos outros clientes que tiveram sua independência energetica conquistada com a Conquist Energy.",
      como: "Projetamos, instalamos e mantemos sistemas fotovoltaicos residenciais, garantindo máxima eficiência e suporte contínuo.",
      cta: "Fale conosco no WhatsApp",
      link: "https://wa.me/5585999999999?text=Olá! Gostaria de saber mais sobre energia solar residencial."
    },
    icon: <FaSolarPanel />
  },
  {
    id: 2,
    title: "Geração Distribuída",
    description: "Produza sua própria energia e reduza custos com soluções renováveis.",
    details: {
      resumo: "Micro e minigeração de energia solar com compensação de excedente na rede.",
      ultimos: "Participamos da instação de GD's para o GrupoG7, para a Ms Serviços e Soluções Energéticas, para a L2M Power Eletronics, além de varios outros clientes que fizeram para consumo próprio.",
      como: "Projetamos, instalamos, dimencionamos e gerenciamos sistemas de geração distribuída, além de dar manutenção nos mesmos, como limpeza das celulas fotovoltaicas e de roço.",
      cta: "Entre em contato agora",
      link: "https://wa.me/5585999999999?text=Olá! Tenho interesse em geração distribuída de energia."
    },
    icon: <FaProjectDiagram />
  },
  {
    id: 3,
    title: "O&M – Obra e Manutenção",
    description: "Garantia de eficiência em parques solares e eólicos, prolongando a vida útil dos ativos.",
    details: {
      resumo: "Serviços completos de montagem, manutenção preventiva e corretiva de parques eólicos e solares.",
      ultimos: "Atuação recente no parque eólico de Caetité - BA, em parceria com a MS Serviços e Soluções Energéticas, e projetos em Pernambuco, outras regiões da Bahia, Rio Grande do Norte e Rio Grande do Sul.",
      como: "Comissionamento, obra e manutenção preventiva/corretiva de aerogeradores e sistemas fotovoltaicos.",
      cta: "Agende sua consultoria",
      link: "https://wa.me/5585999999999?text=Olá! Gostaria de agendar serviços de O&M."
    },
    icon: <FaChartLine />
  }
];

function Serviços() {
  const [openModal, setOpenModal] = useState(null);

  const openService = (id) => setOpenModal(id);
  const closeService = () => setOpenModal(null);

  return (
    <section id="servicos">
      <div className="services-container">
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => openService(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {services.map(
          (service) =>
            openModal === service.id && (
              <div
                key={service.id}
                className="modal-overlay active"
                onClick={closeService}
              >
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <h3>{service.title}</h3>
                    <span className="modal-close" onClick={closeService}>
                      ✖
                    </span>
                  </div>
                  <div className="modal-body">
                    <div className="modal-section">
                      <h4>Resumo:</h4>
                      <p>{service.details.resumo}</p>
                    </div>
                    <div className="modal-section">
                      <h4>Últimos serviços:</h4>
                      <p>{service.details.ultimos}</p>
                    </div>
                    <div className="modal-section">
                      <h4>Como atuamos:</h4>
                      <p>{service.details.como}</p>
                    </div>
                  </div>
                  <div className="modal-actions">
                    <a
                      href={service.details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn primary"
                    >
                      {service.details.cta}
                    </a>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}

export default Serviços;
