import getCategories from '../pages/api/categories';

describe('getCategories', () => {
  test('should successfully return list of categories', async () => { 
    const categoryList = await getCategories()
    expect(categoryList).not.toBe([])
  });
});