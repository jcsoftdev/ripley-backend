import * as dotenv from "dotenv"
import express from 'express'
import cors from 'cors';
import userRoute from './routes/user'

dotenv.config({ path: __dirname+'/.env' })

const app = express()
app.use(express.json())
//middleWare
// app.use(morgan('dev'))
// app.use(formData.parse())

app.use(cors());

//routes
app.use('/api', userRoute)

export default app
