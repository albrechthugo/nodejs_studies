import { removeUndefinedNull } from './removeUndefinedNull';

describe('.removeUndefinedNull()', () => {
  it('should return only keys which have value', () => {
    const obj = {
      page: 0,
      pageSize: null,
      name: 'Testing name',
      value: undefined,
      'test-key': ''
    };

    expect(removeUndefinedNull(obj)).toStrictEqual({ page: 0, name: 'Testing name', 'test-key': '' });
  });
});
