import express from 'express'
import rutasPrincipales from './routes/index.routes.js'
import { dbConnection } from './config/db.js'

import 'dotenv/config'

const app = express()

// Middeware para convertir los datos a JSON
app.use(express.json())

// Rutas
app.use("/api", rutasPrincipales)

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
await dbConnection()

// Levantamos el servidor
try {
    app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))    
} catch (e) {
    console.log(e)
}


