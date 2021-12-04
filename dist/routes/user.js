"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
router.post("/user", users_1.createUser);
router.get("/users", users_1.getUsers);
// PROMEDIO DE EDAD
router.get("/user/average", users_1.getAverage);
router.get("/user/average", (r, q) => { console.log(r, q); });
exports.default = router;
//# sourceMappingURL=user.js.map