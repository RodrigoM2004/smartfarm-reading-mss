import React from "react";
import bgimage from "../../assets/landingpage_bg.jpeg";
import sensor from "../../assets/sensor.png";
import { FaWifi, FaTemperatureHigh, FaSun, FaTint } from "react-icons/fa";
import Button from "../../components/ui/Button";
import Card from "./components/Card";
import NavLanding from "/src/components/NavLanding/NavLanding.jsx";

export default function LandingPage() {
  return (
    <>
    <NavLanding />
    <div className="bg-gray-100">
      
      {/* Seção do topo */}
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
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate__animated animate__fadeInDown">
                A SUA FAZENDA MAIS{" "}
                <span className="text-green-500">INTELIGENTE</span> E CONECTADA
              </h1>
              <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
                Aumente a eficiência, reduza custos e melhore seus resultados
                com soluções acessíveis e tecnologia de ponta.
              </p>
              <Button>Saiba Mais</Button>
            </div>

            <div className="md:w-1/2 w-full flex justify-center md:justify-end py-12 md:py-0">
                <div className="flex justify-center mb-6">
                  <div
                    className={`bg-white rounded-full p-4 mb-6 mx-auto w-45 h-45 lg:w-70 lg:h-70 flex items-center justify-center`}
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

      {/* Seção do Meio */}
      <div className="container mx-auto py-12 my-12 px-8">
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
            iconColor={"blue"}
          ></Card>
          <Card
            title={"Análises Preditivas"}
            description={
              "Relatórios detalhados e previsões para otimizar o uso de insumos e aumentar a produtividade."
            }
            icon={<FaTemperatureHigh />}
            iconColor={"red"}
          ></Card>
          <Card
            title={"Conectividade Total"}
            description={
              "Sistema integrado que funciona mesmo em áreas remotas, com baixo consumo de energia."
            }
            icon={<FaWifi />}
            iconColor={"green"}
          ></Card>
        </div>
      </div>
    </div>
    </>
  );
}
