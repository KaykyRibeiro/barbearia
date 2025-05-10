const express = require('express');
const router = express.Router();
const Services = require('../models/Services'); // Modelo do banco
const Barbers = require('../models/Barbers'); // Modelo do banco

// Criar um novo serviço
router.post('/services-post', async (req, res) => {
    try {
        const { cli_name, cli_tel, service_desc, service_pag, date, barber_name } = req.body;

        const novoServico = await Services.create({
            cli_name,
            cli_tel,
            service_desc,
            service_pag,
            date,
            barber_name
        });

        res.status(201).json(novoServico);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar serviço' });
    }
});

// Buscar todos os serviços
router.get('/services', async (req, res) => {
    try {
        const servicos = await Services.findAll();
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar serviços' });
    }
});

// Buscar todos os barbeiros
router.get('/barbers', async (req, res) => {
    try {
        const barbeiros = await Barbers.findAll();
        res.json(barbeiros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar barbeiros' });
    }
});

// Atualizar um serviço
router.put('/services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { desc_serv, serv_valor, serv_data_hora, serv_status } = req.body;

        const servico = await Services.findByPk(id);
        if (!servico) {
            return res.status(404).json({ error: 'Serviço não encontrado' });
        }

        await servico.update({ desc_serv, serv_valor, serv_data_hora, serv_status });
        res.json(servico);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar serviço' });
    }
});

// Deletar um serviço
router.delete('/services/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const servico = await Services.findByPk(id);
        if (!servico) {
            return res.status(404).json({ error: 'Serviço não encontrado' });
        }

        await servico.destroy();
        res.json({ message: 'Serviço deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar serviço' });
    }
});

module.exports = router;
