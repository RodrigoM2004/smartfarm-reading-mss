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
    address: "Rua dos Testes, 123"
  },
  {
    name: "Admin Silva",
    email: "admin@email.com",
    password: "admin123",
    address: "Av. MongoDB, 456",
    role: "admin"
  },
  {
    name: "Produtor João",
    email: "joao@fazenda.com",
    password: "agricultura123",
    address: "Fazenda Feliz, Zona Rural"
  }
];

async function insertMockUsers() {
  try {
    await mongoose.connection.db.dropCollection('users'); // Limpa a coleção

    for (const mockUser of mockUsers) {
      await userService.createUser(mockUser); // Usa a lógica da aplicação
    }

    console.log('Mock users inseridos com sucesso!');
  } catch (err) {
    console.error('Erro ao inserir mock users:', err);
  } finally {
    mongoose.disconnect();
  }
}

insertMockUsers();