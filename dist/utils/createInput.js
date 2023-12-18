"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInput = void 0;
function createInput(body) {
    var _a, _b;
    return {
        max_new_tokens: body.max_new_tokens,
        temperature: body.temperature,
        top_p: (_a = body.top_p) !== null && _a !== void 0 ? _a : 0.9,
        prompt: body.prompt,
        top_k: (_b = body.top_k) !== null && _b !== void 0 ? _b : 0.9
    };
}
exports.createInput = createInput;
