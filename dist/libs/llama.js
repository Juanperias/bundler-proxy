"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llama = void 0;
const openai_1 = require("openai");
const env_1 = require("../env");
exports.llama = new openai_1.OpenAI({
    apiKey: env_1.env.LLAMA_API_KEY,
    baseURL: 'https://api.llama-api.com'
});
