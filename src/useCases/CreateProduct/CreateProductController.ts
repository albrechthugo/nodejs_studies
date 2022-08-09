import { Request, Response } from 'express';
import { CreateProductDto } from '../../domain/dtos';
import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request<unknown, unknown, CreateProductDto>, response: Response) {
    const dto = request.body;

    await this.createProductUseCase.execute(dto);

    return response.status(201).send();
  }
}
