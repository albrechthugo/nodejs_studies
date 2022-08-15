import { Request, Response } from 'express';
import { GetProductsParamsDto } from '../../domain/dtos';
import { GetProductsUseCase } from './GetProductsUseCase';

export class GetProductsController {
  constructor(private getProductsUseCase: GetProductsUseCase) {}

  async handle(request: Request<unknown, unknown, unknown, GetProductsParamsDto>, response: Response) {
    const products = await this.getProductsUseCase.execute(request.query);
    return response.status(200).json(products);
  }
}
