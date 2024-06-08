import request from 'supertest';
import app from '@/modules/app';

describe('GET /', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
    });
});
