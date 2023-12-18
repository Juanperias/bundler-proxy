"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HF = void 0;
const inference_1 = require("@huggingface/inference");
const env_1 = require("../env");
exports.HF = new inference_1.HfInference(env_1.env.HUGGINGFACE_API_KEY, {});
