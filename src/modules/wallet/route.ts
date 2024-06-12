import express from 'express';
import { CreateWallet, GetWalletById } from './controller';
import validate from '@/common/middleware/validator.middleware';
import createWalletSchema from './schema/create-wallet.schema.json';

const walletRouter = express.Router();

walletRouter.get('/:id', GetWalletById);

walletRouter.post('/', validate(createWalletSchema), CreateWallet);

export default walletRouter;
