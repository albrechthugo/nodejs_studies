import { Product } from 'src/domain/entities';
import { ProductsPostgresRepositoriesMock } from '../../mocks';
import { GetProductsUseCase } from './GetProductsUseCase';

describe('GetProductsUseCase', () => {
  it('should get and return all the products from ProductsRepository', async () => {
    const productsRepository = new ProductsPostgresRepositoriesMock();
    const getProductsUseCase = new GetProductsUseCase(productsRepository);
    const productsRepositoryGetAll = jest.spyOn(productsRepository, 'getAll');

    const expectedProducts = await getProductsUseCase.execute();

    expect(expectedProducts).toEqual(expect.arrayContaining([new Product()]));
    expect(productsRepositoryGetAll).toHaveBeenCalledTimes(1);
  });
});
