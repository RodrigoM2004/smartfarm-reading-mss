import mongoose from 'mongoose';
import User from './user_model.js'

// Conexão com o DB 
mongoose.connect('mongodb+srv://baguncadomonstrao:%23CabecaDoVandeco%40321@cluster-smartfarm.xailfpc.mongodb.net/smartfarm?retryWrites=true&w=majority&appName=Cluster-SmartFarm', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Dados mockados
const mockUsers = [
  {
    name: "Carla Teste",
    email: "carla@email.com",
    password: "123456",
    role: "user",
    address: "Rua dos Testes, 123",
    dateOfJoining: new Date(1713139200000)
  },
  {
    name: "Admin Silva",
    email: "admin@email.com",
    password: "admin123",
    role: "admin",
    address: "Av. MongoDB, 456",
    dateOfJoining: new Date()
  },

  {
    name: "Produtor João",
    email: "joao@fazenda.com",
    password: "agricultura123",
    role: "user",
    address: "Fazenda Feliz, Zona Rural",
    dateOfJoining: new Date()
  }
];

// Função para inserir os dados
async function insertMockUsers() {
  try {
    await User.deleteMany({}); // Opcional: limpa a coleção antes de inserir
    await User.insertMany(mockUsers);
    console.log('Dados mockados inseridos com sucesso!');
  } catch (err) {
    console.error('Erro ao inserir dados:', err);
  } finally {
    mongoose.disconnect();
  }
}

insertMockUsers();