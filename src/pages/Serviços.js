import React from "react";
import { FaHome, FaBuilding, FaTools, FaProjectDiagram, FaChartLine, FaPlug } from "react-icons/fa";

function Servicos() {
  return (
    <section id="servicos" className="services">
      <h2 className="section-title">Nossos Serviços</h2>
      <div className="services-grid">
        {/* Linha 1 */}
        <div className="service-card service-residencial">
          <div className="service-icon"><FaHome size={40} /></div>
          <h3>Energia Solar Residencial</h3>
          <p>
            Instalação completa de sistemas solares para residências e condomínios,
            garantindo economia, sustentabilidade e máxima eficiência energética.
            Acompanhamento técnico desde o projeto até a entrega final, com garantia de qualidade.
          </p>
        </div>

        <div className="service-card service-distribuida">
          <div className="service-icon"><FaBuilding size={40} /></div>
          <h3>Geração Distribuída</h3>
          <p>
            Projetos de micro e minigeração para empresas, reduzindo custos e
            otimizando o retorno sobre o investimento. Inclui análise de viabilidade,
            acompanhamento do processo de conexão e manutenção preventiva.
          </p>
        </div>

        <div className="service-card service-om">
          <div className="service-icon"><FaTools size={40} /></div>
          <h3>Obra & Manutenção (O&M)</h3>
          <p>
            Execução de obras, instalações elétricas e manutenção de sistemas
            solares e eólicos, garantindo operação contínua e eficiente.
            Inclui comissionamento de aerogeradores, instalação de inversores e módulos fotovoltaicos.
          </p>
        </div>

        {/* Linha 2 */}
        <div className="service-card service-gestao-obras">
          <div className="service-icon"><FaProjectDiagram size={40} /></div>
          <h3>Gestão de Obras</h3>
          <p>
            Gerenciamento completo de projetos de micro e minigeração distribuída e aerogeradores:
            planejamento e acompanhamento de cronogramas, gestão de equipes técnicas,
            controle de qualidade, conformidade com normas, uso de softwares especializados
            (Smartsheet e Microsoft 365) para monitoramento, análise de dados e emissão de relatórios.
          </p>
        </div>

        <div className="service-card service-consultoria">
          <div className="service-icon"><FaChartLine size={40} /></div>
          <h3>Consultoria e Eficiência Energética</h3>
          <p>
            Inspeção e análise energética da empresa, oferecendo soluções para otimização
            do consumo e redução de custos, aumentando a eficiência operacional.
          </p>
        </div>

        <div className="service-card service-instalacoes">
          <div className="service-icon"><FaPlug size={40} /></div>
          <h3>Instalações Elétricas</h3>
          <p>
            Projetos, execução e manutenção de instalações de baixa e média tensão,
            incluindo inspeções, supervisão e equipe especializada para máxima confiabilidade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
