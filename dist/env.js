"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT != null ? parseInt(process.env.PORT) : 3500;
exports.env = Object.freeze({
    PORT: port,
    HUGGINGFACE_API_KEY: (_a = process.env.HUGGINGFACE_API_KEY) !== null && _a !== void 0 ? _a : '',
    PROVIDER: process.env.PROVIDER === 'huggingface' ? 'huggingface' : process.env.PROVIDER === 'fireworks' ? 'fireworks' : 'huggingface',
    FIREWORKS_API_KEY: (_b = process.env.FIREWORKS_API_KEY) !== null && _b !== void 0 ? _b : '',
    FIREWORKS_MODEL: (_c = process.env.FIREWORKS_MODEL) !== null && _c !== void 0 ? _c : '',
    HUGGINGFACE_MODEL: (_d = process.env.HUGGINGFACE_MODEL) !== null && _d !== void 0 ? _d : ''
});
