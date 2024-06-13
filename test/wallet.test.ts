import request from 'supertest';
// ts-ignore
import app from '@/modules/app';

const walletData = {
    title: 'Book contribution',
    charged_amount: 400,
};

describe('Wallet endpoints /wallet', () => {
    it('should get wallet info', async () => {
        const id = 1;
        const res = await request(app).get(`/wallet/${id}`);
        expect(res.status).toBe(200);
    });

    it('should create a wallet with bad data', async () => {
        const res = await request(app).post('/wallet').send({});
        expect(res.status).toBe(400);
        expect(res.body.success).toEqual(false);
        expect(res.body.errors).toBeDefined();
    });

    it('should create a wallet with good data', async () => {
        const res = await request(app).post('/wallet').send(walletData);
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('data');
        expect(res.body).toHaveProperty('success');
        expect(res.body.success).toEqual(true);
    });
});
