"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const env_1 = require("../env");
const router = (0, express_1.Router)();
// GET MODEL DETAILS
router.get('/api/v1/model', (req, res) => {
    res.json({
        result: env_1.env.MODEL
    });
});
exports.default = router;
