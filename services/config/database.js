const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://neondb_owner:npg_Aflmst3C1Bza@ep-fragrant-night-a4lea8vf-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require');

module.exports = sequelize;
