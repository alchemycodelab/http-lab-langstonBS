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
  describe('app routes', () => {
    it('handles the red route', () => {
      return request(app)
        .get('/red')
        .then(res => {
          expect(res.text).toEqual('<h1>hi red</h1>');
        });
    });
  });
    
  describe('app routes', () => {
    it('handles the blue route', () => {
      return request(app)
        .get('/blue')
        .then(res => {
          expect(res.text).toEqual('<h1>hi blue</h1>');
        });
    });
  });
  describe('app routes', () => {
    it('handles the green route', () => {
      return request(app)
        .get('/green')
        .then(res => {
          expect(res.text).toEqual('<h1>hi green</h1>');
        });
    });
  });
});

