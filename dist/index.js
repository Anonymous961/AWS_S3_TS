"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
const config_1 = __importDefault(require("./config"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(require('express-status-monitor')());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('tiny'));
app.use("/api", index_1.default);
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.json({ message: "Hello this is working " });
});
app.listen(PORT, () => {
    console.log(config_1.default);
    console.log(`Server is running on https://localhost:${PORT}`);
});
