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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHugginface = void 0;
const env_1 = require("../env");
const hugginface_1 = require("../libs/hugginface");
function generateHugginface(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield hugginface_1.HF.textGeneration({
            inputs: input.prompt,
            model: env_1.env.HUGGINGFACE_MODEL,
            parameters: {
                top_k: input.top_k,
                top_p: input.top_p,
                temperature: input.temperature,
                max_new_tokens: input.max_new_tokens
            }
        });
        return response.generated_text;
    });
}
exports.generateHugginface = generateHugginface;
