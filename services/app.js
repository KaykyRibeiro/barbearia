const express = require('express');
const cors = require('cors');
const servicesRoutes = require('./routes/services.routes'); // Importa as rotas de serviços

const app = express();
app.use(cors());
app.use(express.json());

// Usa as rotas
app.use('/api', servicesRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
