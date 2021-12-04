"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.TEXT
    },
    last_name: {
        type: sequelize_1.DataTypes.TEXT
    },
    date_born: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    tableName: 'users',
    sequelize: database_1.default,
    timestamps: false
});
exports.default = User;
//# sourceMappingURL=user.js.map