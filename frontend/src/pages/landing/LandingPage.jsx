import React from "react";
import bgimage from "../../assets/landingpage_bg.jpeg";
import sensor from "../../assets/sensor.png";
import { FaWifi, FaTemperatureHigh, FaSun, FaTint, FaChartLine, FaLeaf } from "react-icons/fa";
import Button from "../../components/ui/Button";
import Card from "./components/Card";
import NavLanding from "/src/components/NavLanding/NavLanding.jsx";
import { additionalServices, mainServices } from "../../utils/constants/services-list";
import { ServiceCard } from "./components/ServiceCard";
import { AdditionalServiceCard } from "./components/AdditionalServiceCard";

export default function LandingPage() {

  return (
    <>
    <NavLanding />
    <div className="bg-gray-100 pt-16">
      
      {/* Seção do topo (hero) */}
      <div
        className="relative overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay escuro na imagem */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

        {/* Texto que sobrepõe a imaegm */}
        <div className="container relative z-20 mx-auto p-8 lg:p-16 lg:px-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full text-white text-center md:text-left py-12 md:py-0">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate_animated animate_fadeInDown">
                A SUA FAZENDA MAIS{" "}
                <span className="text-green-500">INTELIGENTE</span> E CONECTADA
              </h1>
              <p className="text-xl mb-8 animate_animated animatefadeIn animate_delay-1s">
                Aumente a eficiência, reduza custos e melhore seus resultados
                com soluções acessíveis e tecnologia de ponta.
              </p>
              <Button>Saiba Mais</Button>
            </div>

            <div className="md:w-1/2 w-full flex justify-center md:justify-end py-12 md:py-0">
                <div className="flex justify-center mb-6">
                  <div
                    className={"bg-white rounded-full p-4 mb-6 mx-auto w-45 h-45 lg:w-70 lg:h-70 flex items-center justify-center"}
                  >
                    <img
                      src={sensor}
                      alt="Sensor SmartFarm"
                      className="w-50 h-50 lg:w-75 lg:h-75 object-contain absolute"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção "Sobre" */}
      <div className="container mx-auto py-12 my-12 px-8" id="about">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="text-green-600 font-bold text-lg">
              CONECTIVIDADE INTELIGENTE
            </div>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-8">
            CONECTE SEU CAMPO AO FUTURO:{" "}
            <span className="text-green-600">DADOS PRECISOS</span>, DECISÕES
            INTELIGENTES
          </h2>
          <p className="text-xl text-gray-600 mx-auto max-w-3xl">
            Nossa plataforma integrada oferece monitoramento em tempo real e
            análises preditivas para maximizar sua produtividade.
          </p>
        </div>
        {/* Seção com cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card
            title={"Monitoramento Preciso"}
            description={
              "Dados em tempo real da umidade do solo, temperatura ambiente e luminosidade para decisões precisas."
            }
            icon={<FaTint />}
            iconColor={"text-blue-600"}
            iconBg={"bg-blue-100"}
          ></Card>
          <Card
            title={"Análises Preditivas"}
            description={
              "Relatórios detalhados e previsões para otimizar o uso de insumos e aumentar a produtividade."
            }
            icon={<FaTemperatureHigh />}
            iconColor={"text-red-600"}
            iconBg={"bg-red-100"}
          ></Card>
          <Card
            title={"Conectividade Total"}
            description={
              "Sistema integrado que funciona mesmo em áreas remotas, com baixo consumo de energia."
            }
            icon={<FaWifi />}
            iconColor={"text-green-600"}
            iconBg={"bg-green-100"}
          ></Card>
        </div>
      </div>

      {/* Seção "Serviços" */}

      {/* Main Services */}
      <div className="container mx-auto px-4 py-16 md:py-8" id="services">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-600 mb-4 py-2 px-4 rounded-full text-sm font-semibold">
            <FaLeaf className="mr-2" /> SOLUÇÕES COMPLETAS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologia <span className="text-green-600">Agrícola</span> de Ponta
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos um ecossistema integrado de soluções para modernizar sua fazenda e aumentar sua produtividade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-5/12 mb-12 lg:mb-0 lg:pr-10">
              <div className="inline-flex items-center bg-green-100 text-green-600 mb-4 py-2 px-4 rounded-full text-sm font-semibold">
                <FaChartLine className="mr-2" /> VANTAGENS
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Por que escolher nossos <span className="text-green-600">serviços</span>?
              </h2>
              <p className="text-gray-600 mb-8">
                Nossa plataforma integrada oferece tudo que você precisa para a agricultura de precisão em um único lugar.
              </p>
            </div>
            <div className="lg:w-7/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <AdditionalServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}