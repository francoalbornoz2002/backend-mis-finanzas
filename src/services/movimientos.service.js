import { Movimiento } from '../models/movimientos.model.js';

class MovimientosService {

    async create (body) {
        const {tipo, categoria, monto, fecha } = body;

        const newMovimiento = new Movimiento({
            tipo,
            categoria,
            monto,
            fecha
        })

        const savedMovimiento = await newMovimiento.save();

        return savedMovimiento;
    }
    
    async update (id, body) {
        const {tipo, categoria, monto, fecha } = body;

        const updatedMovimiento = await Movimiento.findByIdAndUpdate(id, {
            tipo,
            categoria,
            monto,
            fecha
        }, { new: true });

        return updatedMovimiento;
    }

    async delete (id) {
        const deletedMovimiento = await Movimiento.findByIdAndDelete(id);
        return deletedMovimiento;
    }

    async getAll (){
        const movimientos = await Movimiento.find()
        return movimientos;
    }

    async getOne (id) {
        const movimiento = await Movimiento.findById(id);
        return movimiento;
    }

    async getBalance () {

        // 1. Obtenemos todos los movimientos de la base de datos
        const movimientos = await Movimiento.find();

        if (movimientos.length === 0) {
            return "No hay movimientos para generar el balance";
        }

        // 2. Calculamos el balance
        let balance = 0;
        movimientos.forEach(movimiento => {
            if (movimiento.tipo === 'ingreso') {
                balance += movimiento.monto;
            } else {
                balance -= movimiento.monto;
            }  
        })

        // 3. Devolvemos el balance
        return {balance: balance};
    
    }



}

export default new MovimientosService;