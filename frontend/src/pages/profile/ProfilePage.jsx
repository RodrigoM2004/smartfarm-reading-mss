// src/pages/ProfilePage.jsx
import { useState } from 'react';
import { FiEdit, FiClock, FiMapPin, FiTrendingUp, FiX } from "react-icons/fi";
import { FaLeaf, FaTint, FaTemperatureHigh, FaSun } from "react-icons/fa";
import { userProfile } from "./components/userData";
import { userActions } from "./components/userActions";
import logo from "../../assets/logo.png";

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="profile-page bg-gray-50">
      {/* Pop up para a edição de perfil (WIP) */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold">Editar Perfil</h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  defaultValue={userProfile.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Fazenda</label>
                <input
                  type="text"
                  defaultValue={userProfile.farm.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={userProfile.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <input
                    type="text"
                    defaultValue={userProfile.role}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-4 border-t">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"  
              >
                Excluir Conta
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <div 
          className="h-20 w-full bg-green-600"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute top-4 right-4">
            <img src={logo} alt="Logo" className="h-15 sm:h-0" />
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 relative z-10">
            <div className="relative">
              <img 
                src={userProfile.avatar} 
                className="w-50 h-50 rounded-full border-4 border-white shadow-lg"
                alt="Avatar do usuário"
              />
              <button 
                onClick={() => setIsEditModalOpen(true)}
                className="absolute bottom-2 right-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <FiEdit size={16} />
              </button>
            </div>
            
            <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800">{userProfile.name}</h1>
              <p className="text-gray-600">{userProfile.role}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
                <span className="flex items-center text-sm text-gray-600">
                  <FiClock className="mr-1" /> Membro desde {userProfile.dateOfJoining}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Informações da Fazenda */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FaLeaf className="text-green-500 mr-2" /> Minha Fazenda
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">{userProfile.farm.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <FiMapPin className="mr-2" /> {userProfile.farm.location}
                  </p>
                </div>
                
                <div className="gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Tamanho</p>
                    <p className="font-semibold">{userProfile.farm.size}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Número de sensores</p>
                    <p className="font-semibold">8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-6">Ações Rápidas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userActions.map((action, index) => (
                  <button 
                    key={index}
                    className="group flex items-start p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors text-left"
                  >
                    <span className="text-2xl mr-4 group-hover:text-green-500 transition-colors">
                      {action.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                      {action.count && (
                        <span className="inline-block mt-1 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                          {action.count} novo(s)
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}