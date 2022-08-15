import { useSql } from './useSql';

describe('.useSql()', () => {
  it('should return the query with params which was received as object', () => {
    const givenStatement = 'SELECT * FROM PRODUCTS WHERE id = :id AND name = :name';
    const expectedStatement = 'SELECT * FROM PRODUCTS WHERE id = testing-uuid AND name = iPhone';

    expect(useSql(givenStatement, { id: 'testing-uuid', name: 'iPhone' })).toBe(expectedStatement);
  });

  it(`should return the query which was received if params wasn't received`, () => {
    const givenStatement = 'SELECT * FROM PRODUCTS';

    expect(useSql(givenStatement)).toBe(givenStatement);
  });
});
