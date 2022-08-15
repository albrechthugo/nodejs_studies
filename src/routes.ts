import { Router, Request, Response } from 'express';
import { GetProductsParamsDto } from './domain/dtos';
import { createProductController, findProductByIdController, getProductsController } from './useCases';

const router = Router();

router.get('/products', (req: Request<unknown, unknown, unknown, GetProductsParamsDto>, res: Response) =>
  getProductsController.handle(req, res)
);

router.get('/products/:id', (req: Request<{ id: string }>, res: Response) =>
  findProductByIdController.handle(req, res)
);

router.post('/products', (req: Request, res: Response) => createProductController.handle(req, res));

export { router };
