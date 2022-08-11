import { ProductsPostgresRepositoriesMock } from '../../mocks';
import { FindProductByIdUseCase } from './FindProductByIdUseCase';

describe('FindProductByIdUseCase', () => {
  it('should find a product by id from ProductsRepository and return it', async () => {
    const productsRepository = new ProductsPostgresRepositoriesMock();
    const findProductByIdUseCase = new FindProductByIdUseCase(productsRepository);
    const productsRepositoryFindById = jest.spyOn(productsRepository, 'findById');

    const expectedProduct = await findProductByIdUseCase.execute('testing-uuid');

    expect(expectedProduct.id).toEqual('testing-uuid');
    expect(productsRepositoryFindById).toHaveBeenCalledWith('testing-uuid');
  });
});
