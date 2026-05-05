import { Router } from 'express';
import movimientosRoutes from '../routes/movimientos.routes.js';

const router = Router();

// Conectamos el enrutador de movimientos al prefijo /movimientos
router.use('/movimientos', movimientosRoutes);

export default router;