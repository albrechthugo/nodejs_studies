import { CreateProductDto } from '../../domain/dtos';
import { ProductsPostgresRepositoriesMock } from '../../mocks';
import { CreateProductUseCase } from './CreateProductUseCase';

describe('CreateProductUseCase', () => {
  it('should create a new product and send to ProductsRepository', async () => {
    const productsRepository = new ProductsPostgresRepositoriesMock();
    const createProductUseCase = new CreateProductUseCase(productsRepository);
    const productsRepositoryCreate = jest.spyOn(productsRepository, 'create');
    const dto: CreateProductDto = {
      name: 'Testing Name',
      value: 100,
      description: 'Testing Description'
    };

    await createProductUseCase.execute(dto);

    expect(productsRepositoryCreate).toHaveBeenCalledWith({
      ...dto,
      id: 'testing-uuid'
    });
  });
});
