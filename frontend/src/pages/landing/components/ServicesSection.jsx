import React from "react";
import { FaChartLine, FaLeaf } from "react-icons/fa";
import { mainServices, additionalServices } from "../../../utils/constants/services-list";
import { ServiceCard } from "./ServiceCard";
import { AdditionalServiceCard } from "./AdditionalServiceCard";

export default function ServicesSection() {
  return (
    <div className="container mx-auto py-12 my-12 px-8" id="services">
      <div className="container mx-auto px-4 py-16 md:py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-600 mb-4 py-2 px-4 rounded-full text-sm font-semibold">
            <FaLeaf className="mr-2" /> SOLUÇÕES COMPLETAS
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-8">
            Tecnologia <span className="text-green-600">Agrícola</span> de Ponta
          </h2>
          <p className="text-xl text-gray-600 mx-auto max-w-3xl">
            Oferecemos um ecossistema integrado de soluções para modernizar sua fazenda e aumentar sua produtividade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

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
  );
}
