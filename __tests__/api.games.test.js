import { createMocks } from 'node-mocks-http';
import getGames from '../pages/api/games';

describe('/api/games', () => {
  const category = 'v4SfYtS2Lr'
  function mockRequestResponse(method = 'GET') {
    const { req, res } = createMocks({ method });
    req.query = { category: `${category}` };
    return { req, res };
  }
    test('should successfully returna an object with a name and image', async () => {
        const { req, res } = mockRequestResponse();
        await getGames(req, res);
        expect(res.statusCode).toBe(200);
        expect(JSON.parse(res._getData()).data.games[0]).toHaveProperty('name');
        expect(JSON.parse(res._getData()).data.games[0]).toHaveProperty('average_user_rating');
        expect(JSON.parse(res._getData()).data.games[0]).toHaveProperty('average_learning_complexity');
        expect(JSON.parse(res._getData()).data.games[0]).toHaveProperty('image_url');
    });
});