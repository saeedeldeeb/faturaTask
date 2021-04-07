import { Router } from 'express';
const router = Router();
import ProductController from '../app/controllers/productscontroller'
import paginate from '../app/middlewares/pagination';

//list products by its category
router.get('/', ProductController.index, paginate);
router.put('/:id', ProductController.toggle);

export default router;