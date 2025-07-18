import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoute from './routes/userRoute.js'

import { createRequire } from "module";
const require = createRequire(import.meta.url);
import swaggerUi from 'swagger-ui-express'
const outputJson = require("./swagger-output.json");

const app = express()

dotenv.config()
app.use(cors())

app.use(express.json())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson))
app.use("/", userRoute)

app.listen(3000, function() {
    console.log("Back-end em execução.")
})

export default app