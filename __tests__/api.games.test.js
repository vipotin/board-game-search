import { createMocks } from 'node-mocks-http';
import getGames from '../pages/api/games';

describe('/api/games', () => {
  function mockRequestResponse(category, method = 'GET') {
    const { req, res } = createMocks({ method });
    req.query = { category: `${category}` };
    return { req, res };
  }
    test('should successfully return a list of games with correct properties', async () => {
      const category = 'v4SfYtS2Lr'
      const { req, res } = mockRequestResponse(category);
      await getGames(req, res);
      expect(res.statusCode).toBe(200);
      expect(JSON.parse(res._getData()).data.games[0]).toHaveProperty('name');
      expect(JSON.parse(res._getData()).data.games[0]).toHaveProperty('average_user_rating');
      expect(JSON.parse(res._getData()).data.games[0]).toHaveProperty('average_learning_complexity');
      expect(JSON.parse(res._getData()).data.games[0]).toHaveProperty('image_url');
    });

    test('should return empty array with faulty category', async () => {
      const category = 'not-a-category'
      const { req, res } = mockRequestResponse(category);
      await getGames(req, res);
      expect(JSON.parse(res._getData()).data.count).toBe(0);
    });
});