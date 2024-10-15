"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Client = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const config_1 = __importDefault(require("../config"));
const ACCESS_KEY = config_1.default.ACCESS_KEY;
const SECRET_KEY = config_1.default.SECRET_KEY;
const BUCKET_REGION = config_1.default.BUCKET_REGION;
if (!ACCESS_KEY || !SECRET_KEY || !BUCKET_REGION) {
    throw new Error("AWS Access Key and Secret Key must be defined in the config.");
}
exports.s3Client = new client_s3_1.S3Client({
    region: BUCKET_REGION,
    credentials: {
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY
    }
});
