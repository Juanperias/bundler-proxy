"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fireworks = void 0;
const openai_1 = require("openai");
const env_1 = require("../env");
exports.fireworks = new openai_1.OpenAI({
    baseURL: 'https://api.fireworks.ai/inference/v1',
    apiKey: env_1.env.FIREWORKS_API_KEY
});
