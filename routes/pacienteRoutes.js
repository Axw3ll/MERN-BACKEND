import express from 'express'
import { 
    actualizarPaciente,
    agregarPacientes, 
    eliminarPaciente, 
    obtenerPaciente, 
    obtenerPacientes 
} from '../controllers/pacienteControllers.js';
import checkAuth from '../middleware/authmiddleware.js'
const router = express.Router();

router.route('/')
    .post(checkAuth, agregarPacientes)
    .get(checkAuth, obtenerPacientes)
router.route('/:id')
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente)
export default router;