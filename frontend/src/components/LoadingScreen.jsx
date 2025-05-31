import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
        <p className="text-gray-700 text-lg font-medium">Carregando dados...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
