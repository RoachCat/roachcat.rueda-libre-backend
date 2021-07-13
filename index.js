const dotenv = require("dotenv")
dotenv.config()

//ENV
const port = process.env.PORT || 3000
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME

//Imports
const express = require("express")
const bodyParser = require("body-parser")
const router = require("./router/routes.js")
const swaggerUi = require("swagger-ui-express")
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require("./swagger/swagger")
const swaggerSpec = swaggerJSDoc(swaggerConfig);
const app = express()
const db = require("./db")
db(`mongodb+srv://${dbUser}:${dbPassword}${dbHost}/${dbName}`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

router(app)

app.use('/', express.static('public'))




app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})