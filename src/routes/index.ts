import express from 'express'
import { deleteObject, getListObjects, getObjects, putObject } from '../controller/index';
import multer from 'multer'

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } //limiting file size to 5mb
})


const router = express.Router();


router.post("/uploadFile", upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            res.status(400).json({
                message: "No file upload"
            })
        } else {
            const result = await putObject(file);
            res.json({
                result
            })
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({
            error: e
        })
    }
})

router.delete("/deleteObject", async (req, res) => {
    try {
        const { fileName } = req.body;
        console.log("file name ", fileName)
        const response = await deleteObject(fileName);
        res.json({
            response
        })
    } catch (e) {
        console.error(e);
        res.status(400).json({
            error: e
        })
    }
})


router.get('/getbuckets', async (req, res) => {
    try {
        const numberOfBuckets = await getListObjects();

        res.json({
            bucketList: numberOfBuckets
        })
    } catch (e) {
        console.error(e);
        res.status(400).json({
            error: e
        })
    }
})

router.get('/getObjects', async (req, res) => {
    try {
        const objects = await getObjects()
        res.json({
            objects
        })
    } catch (e) {
        console.error(e);
        res.status(400).json({
            error: e
        })
    }
})


export default router;