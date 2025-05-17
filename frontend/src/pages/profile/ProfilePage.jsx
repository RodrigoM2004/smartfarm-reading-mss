// src/pages/ProfilePage.jsx
import { useState } from 'react';
import { FiEdit, FiClock, FiMapPin, FiX } from "react-icons/fi";
import { userActions } from "./components/userActions";
import { UserMock } from '../../utils/Mocks/UserMock';
import farmerBasic from '../../assets/farmerBasic.png';
import farmerIntermediary from '../../assets/farmerIntermediary.png';
import farmerPremium from '../../assets/farmerPremium.png';
import { timestampToDate } from '../../utils/formatters/date-formatters';

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [ userAvatar, setUserAvatar ] = useState();

  const handleUserAvatar = () => {
    if (UserMock.role === 'user-basic') {
      setUserAvatar(farmerBasic);
    }
    if (UserMock.role === 'user-intermediary') {
      setUserAvatar(farmerIntermediary);
    }
    if (UserMock.role === 'user-premium') {
      setUserAvatar(farmerPremium);
    }
  }

  useState(() => {
    handleUserAvatar();
  }, []);


  return (
    <div className="profile-page bg-gray-50">
      {/* Pop up para a edição de perfil */}
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
                  defaultValue={UserMock.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={UserMock.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <input
                    type="text"
                    defaultValue={UserMock.role}
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
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 relative z-10">
            <div className="relative">
              <img 
                src={userAvatar} 
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
              <h1 className="text-2xl font-bold text-gray-800">{UserMock.name}</h1>
              <p className="text-gray-600">{UserMock.role}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
                <span className="flex items-center text-sm text-gray-600">
                  <FiClock className="mr-1" /> Membro desde {timestampToDate(UserMock.dateOfJoining)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div>
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