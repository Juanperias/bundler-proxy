"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const checkApi_1 = __importDefault(require("./checkApi"));
const modelDetails_1 = __importDefault(require("./modelDetails"));
const generate_1 = __importDefault(require("./generate"));
exports.routes = {
    checkApiRoute: checkApi_1.default,
    getModelDetailsRoute: modelDetails_1.default,
    generateRoute: generate_1.default
};
