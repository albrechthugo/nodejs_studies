import { Router, Request, Response } from 'express';
import { createProductController, findProductByIdController } from './useCases';

const router = Router();

router.get('/products/:id', (req: Request<{ id: string }>, res: Response) =>
  findProductByIdController.handle(req, res)
);

router.post('/products', (req: Request, res: Response) => createProductController.handle(req, res));

export { router };
