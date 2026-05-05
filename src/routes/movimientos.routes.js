import express from 'express'
import movimientosController from '../controllers/movimientos.controller.js';

const router = express.Router();

router.get('/', movimientosController.getAll);
router.get('/balance', movimientosController.getBalance)
router.get('/:id', movimientosController.getOne);
router.post('/', movimientosController.create);
router.put('/:id', movimientosController.update);
router.delete('/:id', movimientosController.delete);

export default router;

