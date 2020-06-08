const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('handles the / route', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('<h1>hi</h1>');
      });
  });
});
