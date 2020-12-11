/**
 * @jest-environment node
 */
const request = require('supertest');
const app = require('../../../app') ();

describe('Test Get Multiple URLs', () => {
	it('Default query. Status code must be 200', () => {
		return request(app).get('/')
			.then((response) => {
				expect(response.statusCode).toBe(200);
			});
	});

	it('Default query. Return length should be 3', () => {
		return request(app).get('/')
			.then((response) => {
				expect(response.body.length).toBe(3);
			});
	});

	it('Custom Query for 2 urls. Return length should be 2', () => {
		return request(app).get('/?urls=https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json,https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json')
			.then((response) => {
				expect(response.body.length).toBe(2);
			});
	});

	it('Custom Query for invalid url. Status code should be 404', () => {
		return request(app).get('/?urls=xyz.com')
			.then((response) => {
				expect(response.statusCode).toBe(404);
			});
	});

	it('Default query. Object must have a data attribute', () => {
		return request(app).get('/')
			.then((response) => {
				expect(response.body[ 0 ]).toHaveProperty('data'); // true
			});
	});
});
