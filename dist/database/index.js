"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const enviroment_config_1 = require("../enviroment.config");
const sequelize = new sequelize_1.Sequelize(enviroment_config_1.env.URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    logging: false,
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map