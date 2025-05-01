import React from "react";
import { FaTint, FaTemperatureHigh, FaWifi, FaLightbulb } from "react-icons/fa";
import AboutCard from "./AboutCard";

export default function AboutSection() {
  return (
    <div className="container mx-auto py-12 my-12 px-8" id="about">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="inline-flex items-center bg-green-100 text-green-600 mb-4 py-2 px-4 rounded-full text-sm font-semibold">
            <FaLightbulb className="mr-2" /> CONECTIVIDADE INTELIGENTE
          </div>
        </div>
        <h2 className="font-bold text-4xl md:text-5xl mb-8">
          CONECTE SEU CAMPO AO FUTURO:{" "}
          <span className="text-green-600">DADOS PRECISOS</span>, DECISÕES INTELIGENTES
        </h2>
        <p className="text-xl text-gray-600 mx-auto max-w-3xl">
          Nossa plataforma integrada oferece monitoramento em tempo real e análises preditivas para maximizar sua produtividade.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <AboutCard
          title="Monitoramento Preciso"
          description="Dados em tempo real da umidade do solo, temperatura ambiente e luminosidade para decisões precisas."
          icon={<FaTint />}
          iconColor="text-blue-600"
          iconBg="bg-blue-100"
        />
        <AboutCard
          title="Análises Preditivas"
          description="Relatórios detalhados e previsões para otimizar o uso de insumos e aumentar a produtividade."
          icon={<FaTemperatureHigh />}
          iconColor="text-red-600"
          iconBg="bg-red-100"
        />
        <AboutCard
          title="Conectividade Total"
          description="Sistema integrado que funciona mesmo em áreas remotas, com baixo consumo de energia."
          icon={<FaWifi />}
          iconColor="text-green-600"
          iconBg="bg-green-100"
        />
      </div>
    </div>
  );
}
