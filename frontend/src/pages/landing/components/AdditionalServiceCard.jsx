import React from "react";

export function AdditionalServiceCard({ service }) {
  return (
    <div className="flex bg-white p-6 rounded-lg border-0 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
      <div className="mr-4 text-gray-300 flex-shrink-0">
        {service.icon}
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">{service.title}</h4>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}
