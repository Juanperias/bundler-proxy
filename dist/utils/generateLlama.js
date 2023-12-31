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
exports.generateLLama = void 0;
const env_1 = require("../env");
const llama_1 = require("../libs/llama");
function generateLLama(input) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield llama_1.llama.chat.completions.create({
            model: env_1.env.MODEL,
            messages: [
                {
                    role: 'user',
                    content: input.prompt
                }
            ],
            temperature: input.temperature,
            top_p: input.top_p
        });
        return (_a = res.choices[0].message.content) !== null && _a !== void 0 ? _a : '';
    });
}
exports.generateLLama = generateLLama;
