import request from 'supertest';
import app from '@/modules/app';

describe('Endpoint tests', () => {
    it('should return 200 on /', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
    });
});

describe('Api Response test', () => {
    it('should return formatted response', async () => {
        const resp = await request(app).get('/');

        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
    });
});
