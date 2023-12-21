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
exports.generateWorkers = void 0;
const env_1 = require("../env");
function generateWorkers(input) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.cloudflare.com/client/v4/accounts/${env_1.env.CLOUDFLARE_ID}/ai/run/${env_1.env.MODEL}`, {
                headers: { Authorization: `Bearer ${env_1.env.CLOUDFLARE_API_KEY}` },
                method: 'POST',
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: input.prompt
                        }
                    ]
                })
            });
            const result = yield response.json();
            return (_a = result.result.response) !== null && _a !== void 0 ? _a : '';
        }
        catch (err) {
            if (err instanceof Error) {
                return (_b = err.message) !== null && _b !== void 0 ? _b : '';
            }
        }
    });
}
exports.generateWorkers = generateWorkers;
