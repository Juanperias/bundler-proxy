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
const express_1 = __importDefault(require("express"));
const env_1 = require("./env");
const routes_1 = require("./routes/routes");
const cors_1 = __importDefault(require("cors"));
const localtunnel_1 = __importDefault(require("localtunnel"));
const app = (0, express_1.default)();
const port = env_1.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes.checkApiRoute);
app.use(routes_1.routes.getModelDetailsRoute);
app.use(routes_1.routes.generateRoute);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Your local url is http://localhost:${port}/api`);
    const tunnel = yield (0, localtunnel_1.default)({ port });
    console.log(`Your public url is ${tunnel.url}`);
}));
