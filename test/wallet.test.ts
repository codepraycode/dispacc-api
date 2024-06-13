/* eslint-disable @typescript-eslint/no-explicit-any */
import request from 'supertest';
// ts-ignore
import app from '../src/modules/app';
import {
    generateFakeWalletData,
    generateBadFakeWalletData,
    generateFakeID,
} from '../src/utils/fakeData';
import { WalletModel } from '../src/modules/wallet/model';

const basePath = '/wallet';

let badData: any, goodData: any;

beforeAll(() => {
    badData = generateBadFakeWalletData();
    goodData = generateFakeWalletData();
});

afterAll(async () => {
    if (goodData.id) {
        // Deleting record from db;
        await WalletModel.deleteOneById(goodData.id);
    }
});

describe(`POST: ${basePath}`, () => {
    it('should create a wallet with no data', async () => {
        const res = await request(app).post(basePath).send({});
        expect(res.status).toBe(400);
        expect(res.body.success).toEqual(false);
        expect(res.body.errors).toBeDefined();
    });

    it('should create a wallet with bad data', async () => {
        const res = await request(app).post(basePath).send(badData);
        expect(res.status).toBe(400);
        expect(res.body.success).toBeFalsy();
        expect(res.body.errors).toBeDefined();
    });

    it('should create a wallet with good data', async () => {
        const res = await request(app).post(basePath).send(goodData);
        expect(res.status).toBe(201);
        expect(res.body.success).toBeTruthy();
        expect(res.body.data).toBeDefined();

        expect(res.body.data).toHaveProperty('id');
        goodData.id = res.body.data.id;
        expect(res.body.data.title).toBe(goodData.title);
        expect(res.body.data.charged_amount).toBe(goodData.charged_amount);
    });
});

describe(`GET: ${basePath}`, () => {
    it('should return 404 on /', async () => {
        const res = await request(app).get(basePath);
        expect(res.status).toBe(404);
        expect(res.body.data).toBeUndefined();
    });
    it('should get wallet info on wrong Id', async () => {
        const id = generateFakeID();
        const res = await request(app).get(`/wallet/${id}`);
        expect(res.status).toBe(200);
        expect(res.body.success).toBeFalsy();
        expect(res.body.message).toBeDefined();
    });
    it('should get wallet info on correct Id', async () => {
        const id = goodData.id;
        const res = await request(app).get(`/wallet/${id}`);
        expect(res.status).toBe(200);
        expect(res.body.success).toBeTruthy();
        expect(res.body.message).toBeDefined();
        expect(res.body.data).toBeDefined();
    });
});
