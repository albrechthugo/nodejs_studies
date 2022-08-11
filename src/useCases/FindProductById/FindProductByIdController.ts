import { Request, Response } from 'express';
import { ErrorDto } from '../../domain/dtos';
import { FindProductByIdUseCase } from './FindProductByIdUseCase';

export class FindProductByIdController {
  constructor(private findProductByIdUseCase: FindProductByIdUseCase) {}

  async handle(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;

    const product = await this.findProductByIdUseCase.execute(id);

    if (!product) {
      return response.status(404).json(new ErrorDto(404, 'Nenhum produto encontrado', 'Not Found'));
    }

    return response.status(200).json(product);
  }
}
