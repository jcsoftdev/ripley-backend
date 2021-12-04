"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverage = exports.getUsers = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const getAge = (date) => Math.abs(new Date(Date.now() - new Date(date).getTime()).getFullYear() - 1970);
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, last_name, date_born } = req.body;
    const { params, body, query } = req;
    console.log({ params, body, query });
    try {
        let newUser = yield user_1.default.create({
            name,
            last_name,
            date_born,
        }, {
            fields: ["name", "last_name", "date_born"],
        });
        if (newUser) {
            return res.json({
                message: "User created successfully!",
                data: newUser,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Somethin goes wrong",
            data: {},
        });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_1.default.findAll();
        const users = data.map(({ id, name, last_name, date_born }) => ({
            id,
            name,
            last_name,
            born: new Date(date_born).toLocaleDateString("es-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            age: getAge(date_born),
        }));
        res.json(users);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.getUsers = getUsers;
const getAverage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_1.default.findAll();
        const ages = yield data
            .map((val) => getAge(val.date_born))
            .reduce((prev, current) => prev + current);
        res.send({ average: ages / data.length });
    }
    catch (error) {
        console.log(error);
        res.json({ message: error });
    }
});
exports.getAverage = getAverage;
//# sourceMappingURL=users.js.map