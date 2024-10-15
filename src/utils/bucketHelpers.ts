import { S3Client } from "@aws-sdk/client-s3"
import config from "../config"

const ACCESS_KEY = config.ACCESS_KEY;
const SECRET_KEY = config.SECRET_KEY;
const BUCKET_REGION = config.BUCKET_REGION;

if (!ACCESS_KEY || !SECRET_KEY || !BUCKET_REGION) {
    throw new Error("AWS Access Key and Secret Key must be defined in the config.");
}

export const s3Client = new S3Client({
    region: BUCKET_REGION,
    credentials: {
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY
    }
})

