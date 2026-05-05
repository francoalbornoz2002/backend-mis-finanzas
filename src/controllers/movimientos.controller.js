import movimientosService from '../services/movimientos.service.js'

class MovimientosController {

    constructor(movimientosService) {
        this.movimientosService = movimientosService;
        
        // Vinculamos el contexto de 'this' para que Express no lo pierda al llamar al método desde la ruta.
        this.create = this.create.bind(this);
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.getBalance = this.getBalance.bind(this);
    }


    async create(req, res) {
        try {
            // Llamamos al método del servicio pasando el cuerpo de la petición
            const savedMovimiento = await this.movimientosService.create(req.body);
            
            // Respondemos con el estado 201 (Creado) y el objeto JSON
            res.status(201).json(savedMovimiento);
        } catch (e) {
            console.error(e);
            res.status(500).json({ mensaje: "Error al crear el movimiento" });
        }
    }

    async update (req, res) {
        try {
            const updatedMovimiento = await this.movimientosService.update(req.params.id, req.body);
            if (!updatedMovimiento) {
                return res.status(404).json({ mensaje: "Movimiento no encontrado" });
            }
            res.status(200).json(updatedMovimiento);
        } catch (e) {
            console.log(e)
        }
    }

    async delete (req, res) {
        try {
            const deletedMovimiento = await this.movimientosService.delete(req.params.id);
            if (!deletedMovimiento) {
                return res.status(404).json({ mensaje: "Movimiento no encontrado" });
            }
            res.status(200).json(deletedMovimiento);
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(_, res) {
        try {
            const movimientos = await this.movimientosService.getAll();
            if (movimientos.length === 0) {
                return res.status(404).json({ mensaje: "No hay movimientos" });
            }
            res.json(movimientos);
        } catch (e) {
            res.status(500).json({ mensaje: "Error al obtener movimientos" });
        }
    }

    async getOne (req, res) {
        try {
            const movimiento = await this.movimientosService.getOne(req.params.id)
            if (!movimiento) {
                return res.status(404).json({ mensaje: "Movimiento no encontrado" });
            }
            res.status(200).json(movimiento);
        } catch (e) {
            console.log(e)
        }
    }

    async getBalance (req, res) {
        try {
            const balance = await this.movimientosService.getBalance();
            res.status(200).json(balance);
        } catch (e) {
            console.log(e)
        }
    }

}

export default new MovimientosController(movimientosService);