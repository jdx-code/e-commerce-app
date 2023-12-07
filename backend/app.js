const express = require('express')
const connectDB = require('./config/database')
const userRoutes = require('./routes/users')
const productRoutes = require('./routes/products') 
const passport = require('passport')

const app = express()
const cors = require('cors')

require('dotenv').config({ path: './config/.env' })
connectDB()

// Body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use(passport.initialize())

require('./middleware/passport')(passport)

// Routes
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})