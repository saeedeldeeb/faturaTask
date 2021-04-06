import { Router } from 'express';
const router = Router();
import ProductController from '../app/controllers/productscontroller'

//list products by its category
router.get('/', ProductController.index);

export default router;