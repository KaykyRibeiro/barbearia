const sequelize = require('./config/database');
const InfoBarbershop = require('./models/InfoBarbershop');
const Barber = require('./models/Barber');
const CliTemp = require('./models/CliTemp');
const Services = require('./models/Services');

async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true }); // Cria ou altera tabelas se necessário
    console.log('Banco de dados sincronizado com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
