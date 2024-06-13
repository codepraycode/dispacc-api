import { createRowSchema } from '@/lib/nobox/config';
import { ReturnObject, Space } from 'nobox-client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Transaction = Record<string, any>;

export interface IWallet {
    title: string;
    transaction_ids?: Transaction[];
    charged_amount: number;
    fixed?: boolean;
}

export const WalletStructure: Space<IWallet> = {
    space: 'Wallet',
    description: 'A Record Space for Wallets',
    structure: {
        title: {
            description: 'Wallet label',
            type: String,
            required: true,
        },
        transaction_ids: {
            description: 'Transaction logs id',
            type: Array,
            defaultValue: [],
        },
        charged_amount: {
            description: 'Amount to pay into wallet',
            required: true,
            type: Number,
        },
        fixed: {
            description: 'Fix amount charged or least amount charged',
            type: Boolean,
            defaultValue: false,
        },
    },
};

export const WalletModel = createRowSchema<IWallet>(WalletStructure);

export type Wallet = ReturnObject<IWallet>;
