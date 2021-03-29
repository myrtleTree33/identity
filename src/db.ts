import { Sequelize } from 'sequelize';

const { POSTGRES_DB_URI } = process.env;

const sequelize = new Sequelize(POSTGRES_DB_URI as string);

export default sequelize;
