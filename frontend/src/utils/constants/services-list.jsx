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

export const additionalServices = [
  {
    icon: <FaMobileAlt className="text-blue-400" size={24} />,
    title: "Aplicativo Mobile",
    description: "Controle sua fazenda de qualquer lugar através do nosso aplicativo exclusivo."
  },
  {
    icon: <FaCloud className="text-gray-500" size={24} />,
    title: "Armazenamento em Nuvem",
    description: "Todos seus dados seguros e acessíveis de qualquer dispositivo."
  },
  {
    icon: <FaTools className="text-red-500" size={24} />,
    title: "Manutenção Preventiva",
    description: "Nossa equipe realiza manutenções periódicas para evitar falhas."
  },
  {
    icon: <FaHeadset className="text-green-600" size={24} />,
    title: "Suporte 24/7",
    description: "Equipe especializada disponível a qualquer momento para auxiliar."
  }
];