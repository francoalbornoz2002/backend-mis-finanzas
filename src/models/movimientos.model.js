import { Schema, model } from 'mongoose';

const movimientosSchema = new Schema({
    tipo: {
        type: String,
        required: true,
        enum: ['ingreso', 'gasto'] // Solo permite estos dos valores específicos
    },
    categoria: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now // Si no se envía, usa la fecha actual por defecto
    }
}, { timestamps: true }); // Agrega los campos createdAt y updatedAt de manera automática al crear

// Compilamos el esquema en un Modelo para poder usarlo
export const Movimiento = model('Movimiento', movimientosSchema);