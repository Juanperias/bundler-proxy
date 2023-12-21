"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT != null ? parseInt(process.env.PORT) : 3500;
exports.env = Object.freeze({
    PORT: port,
    HUGGINGFACE_API_KEY: (_a = process.env.HUGGINGFACE_API_KEY) !== null && _a !== void 0 ? _a : '',
    PROVIDER: process.env.PROVIDER === 'huggingface' ? 'huggingface' : process.env.PROVIDER === 'fireworks' ? 'fireworks' : process.env.PROVIDER === 'llama' ? 'llama' : 'workers',
    FIREWORKS_API_KEY: (_b = process.env.FIREWORKS_API_KEY) !== null && _b !== void 0 ? _b : '',
    MODEL: (_c = process.env.MODEL) !== null && _c !== void 0 ? _c : '',
    CLOUDFLARE_API_KEY: (_d = process.env.CLOUDFLARE_API_KEY) !== null && _d !== void 0 ? _d : '',
    CLOUDFLARE_ID: (_e = process.env.CLOUDFLARE_ID) !== null && _e !== void 0 ? _e : '',
    LLAMA_API_KEY: (_f = process.env.LLAMA_API_KEY) !== null && _f !== void 0 ? _f : ''
});
