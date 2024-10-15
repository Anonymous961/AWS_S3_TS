import dotenv from 'dotenv'
dotenv.config();

const config = {
    PORT: process.env.PORT || 4000,
    ACCESS_KEY: process.env.ACCESS_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    BUCKET: process.env.BUCKET,
    BUCKET_REGION: process.env.BUCKET_REGION
}

export default config;