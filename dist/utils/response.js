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
exports.generateResponse = void 0;
const generateHugginface_1 = require("./generateHugginface");
const generateFireworks_1 = require("./generateFireworks");
const generateLlama_1 = require("./generateLlama");
const generateWorkers_1 = require("./generateWorkers");
const env_1 = require("../env");
function generateResponse(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = '';
        switch (env_1.env.PROVIDER) {
            case 'fireworks':
                response = yield (0, generateFireworks_1.generateFireworks)(input);
                break;
            case 'llama':
                response = yield (0, generateLlama_1.generateLLama)(input);
                break;
            case 'huggingface':
                response = yield (0, generateHugginface_1.generateHugginface)(input);
                break;
            case 'workers':
                response = yield (0, generateWorkers_1.generateWorkers)(input);
                break;
        }
        return response;
    });
}
exports.generateResponse = generateResponse;
