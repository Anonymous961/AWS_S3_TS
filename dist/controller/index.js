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
exports.getObjectURL = getObjectURL;
exports.getListObjects = getListObjects;
exports.getObjects = getObjects;
exports.putObject = putObject;
exports.deleteObject = deleteObject;
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const bucketHelpers_1 = require("../utils/bucketHelpers");
const client_s3_1 = require("@aws-sdk/client-s3");
const config_1 = __importDefault(require("../config"));
function getObjectURL(key) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = new client_s3_1.GetObjectCommand({
            Bucket: config_1.default.BUCKET,
            Key: key
        });
        const url = yield (0, s3_request_presigner_1.getSignedUrl)(bucketHelpers_1.s3Client, command);
        return url;
    });
}
function getListObjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const command = new client_s3_1.ListBucketsCommand();
        try {
            const response = yield bucketHelpers_1.s3Client.send(command);
            const bucketList = response.Buckets || [];
            return bucketList;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
function getObjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const command = new client_s3_1.ListObjectsV2Command({ Bucket: config_1.default.BUCKET });
        try {
            const response = yield bucketHelpers_1.s3Client.send(command);
            return response.Contents;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
function putObject(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = new client_s3_1.PutObjectCommand({ Bucket: config_1.default.BUCKET, Key: file.originalname, Body: file.buffer, ContentType: file.mimetype });
        try {
            const response = yield bucketHelpers_1.s3Client.send(command);
            console.log(response);
            return {
                message: "uploaded", response
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
function deleteObject(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = new client_s3_1.DeleteObjectCommand({
            Bucket: config_1.default.BUCKET,
            Key: fileName
        });
        try {
            const response = yield bucketHelpers_1.s3Client.send(command);
            return {
                response, message: "Object Deleted"
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
