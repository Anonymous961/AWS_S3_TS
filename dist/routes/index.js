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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../controller/index");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } //limiting file size to 5mb
});
const router = express_1.default.Router();
router.post("/uploadFile", upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        if (!file) {
            res.status(400).json({
                message: "No file upload"
            });
        }
        else {
            const result = yield (0, index_1.putObject)(file);
            res.json({
                result
            });
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).json({
            error: e
        });
    }
}));
router.delete("/deleteObject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fileName } = req.body;
        console.log("file name ", fileName);
        const response = yield (0, index_1.deleteObject)(fileName);
        res.json({
            response
        });
    }
    catch (e) {
        console.error(e);
        res.status(400).json({
            error: e
        });
    }
}));
router.get('/getbuckets', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numberOfBuckets = yield (0, index_1.getListObjects)();
        res.json({
            bucketList: numberOfBuckets
        });
    }
    catch (e) {
        console.error(e);
        res.status(400).json({
            error: e
        });
    }
}));
router.get('/getObjects', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const objects = yield (0, index_1.getObjects)();
        res.json({
            objects
        });
    }
    catch (e) {
        console.error(e);
        res.status(400).json({
            error: e
        });
    }
}));
exports.default = router;
