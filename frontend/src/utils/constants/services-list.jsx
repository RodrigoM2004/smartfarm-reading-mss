import React from "react";
import { GiFarmTractor, GiWaterDrop } from "react-icons/gi";
import { IoAnalytics } from "react-icons/io5";
import { FaMobileAlt, FaCloud, FaTools, FaHeadset } from "react-icons/fa";

export const mainServices = [
  {
    icon: <GiFarmTractor size={40} className="text-green-600" />,
    title: "Monitoramento Agrícola",
    description: "Sensores inteligentes para acompanhamento em tempo real das condições do solo, clima e cultivos.",
    features: [
      "Umidade do solo",
      "Temperatura ambiente",
      "Luminosidade",
      "Previsão de pragas"
    ]
  },
  {
    icon: <GiWaterDrop size={40} className="text-blue-600" />,
    title: "Gestão de Irrigação",
    description: "Sistema automatizado de irrigação que ajusta o fluxo de água conforme as necessidades da plantação.",
    features: [
      "Controle por aplicativo",
      "Economia de água",
      "Programação inteligente",
      "Alertas de vazamento"
    ]
  },
  {
    icon: <IoAnalytics size={40} className="text-yellow-500" />,
    title: "Análise de Dados",
    description: "Plataforma de analytics com relatórios personalizados para tomada de decisão baseada em dados.",
    features: [
      "Histórico completo",
      "Tendências de crescimento",
      "Recomendações personalizadas",
      "Integração com ERP"
    ]
  }
];
