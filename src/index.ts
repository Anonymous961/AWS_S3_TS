import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import api from './routes/index'
import config from './config'

dotenv.config();

const app = express();

app.use(require('express-status-monitor')());
app.use(express.json());
app.use(morgan('tiny'))

app.use("/api", api);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.json({ message: "Hello this is working " })
})

app.listen(PORT, () => {
    console.log(config)
    console.log(`Server is running on https://localhost:${PORT}`)
})

