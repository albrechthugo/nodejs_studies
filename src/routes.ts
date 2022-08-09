import { Router, Request, Response } from 'express';
import { createProductController } from './useCases';

const router = Router();

router.post('/products', (req: Request, res: Response) => createProductController.handle(req, res));

export { router };
