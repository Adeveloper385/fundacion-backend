import express from 'express'
import morgan from 'morgan'

//Import Routes
import IndexRoutes from './routes'

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

// Routes
app.use('/api', IndexRoutes)


export default app 
