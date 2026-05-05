import mongoose from 'mongoose';

// Función asíncrona para manejar la conexión
export const dbConnection = async () => {
    try {
        // Intentamos conectar usando la URI del .env
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Base de datos conectada con éxito");
    } catch (error) {
        console.log("Error al conectar a la base de datos: ", error);
        // Si la DB falla, la app se detiene
        process.exit(1); 
    }
};