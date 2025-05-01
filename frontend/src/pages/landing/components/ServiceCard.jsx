import React from "react";

export function ServiceCard({ service }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6 text-center flex-grow">
        <div className="inline-flex items-center justify-center bg-gray-100 bg-opacity-50 rounded-full p-4 mb-6"> 
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        {service.features?.length > 0 && (
          <ul className="text-left pl-5 space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="text-gray-700 flex items-center">
                <span className="mr-2 text-green-500">✓</span> {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="px-6 pb-6 text-center">
      </div>
    </div>
  );
}
