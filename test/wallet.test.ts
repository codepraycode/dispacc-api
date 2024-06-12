import request from 'supertest';
// ts-ignore
import app from '@/modules/app';

describe('GET /wallet', () => {
    it('should get wallet info', async () => {
        const id = 1;
        const res = await request(app).get(`/wallet/${id}`);
        expect(res.status).toBe(200);
    });

    it('should create a wallet', async () => {
        const res = await request(app).post('/wallet');
        expect(res.status).toBe(201);
    });
});
