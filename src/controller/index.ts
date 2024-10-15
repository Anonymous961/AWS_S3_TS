import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../utils/bucketHelpers";
import { DeleteObjectCommand, GetObjectCommand, ListBucketsCommand, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";
import config from "../config";


interface MulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;  // This holds the actual file data in Node.js
    size: number;
}


export async function getObjectURL(key: string) {
    const command = new GetObjectCommand({
        Bucket: config.BUCKET,
        Key: key
    })

    const url = await getSignedUrl(s3Client, command);

    return url;
}

export async function getListObjects() {
    const command = new ListBucketsCommand()
    try {
        const response = await s3Client.send(command);
        const bucketList = response.Buckets || [];
        return bucketList;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export async function getObjects() {
    const command = new ListObjectsV2Command({ Bucket: config.BUCKET })
    try {
        const response = await s3Client.send(command);
        return response.Contents;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export async function putObject(file: MulterFile) {
    const command = new PutObjectCommand({ Bucket: config.BUCKET, Key: file.originalname, Body: file.buffer, ContentType: file.mimetype })
    try {
        const response = await s3Client.send(command);
        console.log(response)
        return {
            message: "uploaded", response
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export async function deleteObject(fileName: string) {
    const command = new DeleteObjectCommand({
        Bucket: config.BUCKET,
        Key: fileName
    });
    try {
        const response = await s3Client.send(command)
        return {
            response, message: "Object Deleted"
        }
    } catch (error) {
        console.error(error)
        throw error;
    }
}