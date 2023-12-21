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
const response_1 = require("../utils/response");
const express_1 = require("express");
const createInput_1 = require("../utils/createInput");
const env_1 = require("../env");
const router = (0, express_1.Router)();
// CHECK KEY
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = {
            top_k: 50,
            top_p: 0.9,
            prompt: 'Can you say hi!',
            temperature: 0.5,
            max_new_tokens: 250
        };
        const input = (0, createInput_1.createInput)(body);
        yield (0, response_1.generateResponse)(input);
        res.json({
            status: '200',
            message: `RUNNING ${env_1.env.MODEL}`
        });
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(401).json({
                status: '401',
                message: 'invalid key'
            });
            console.log(e);
        }
    }
}));
exports.default = router;
