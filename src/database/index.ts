import { Sequelize } from "sequelize";
import { env } from "../enviroment.config";

const sequelize = new Sequelize(env.URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false }
    
  }, //removed ssl
  logging: false,
});
export default sequelize;
