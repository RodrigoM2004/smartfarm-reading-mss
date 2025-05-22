import React from "react";
import { productTiers } from "../../../utils/constants/products-list";
import { PiFarm } from "react-icons/pi";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <div id="products">
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-600 mb-4 py-2 px-4 rounded-full text-sm font-semibold">
            <PiFarm className="mr-2" /> PLANOS DISPONÍVEIS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções para <span className="text-green-600">todos os tamanhos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos opções flexíveis que se adaptam às necessidades da sua fazenda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {productTiers.map((tier, index) => (
            <ProductCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  );
}




