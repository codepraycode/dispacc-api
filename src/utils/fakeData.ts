import { faker } from '@faker-js/faker';
import { IWallet } from '@/modules/wallet/model';

export const generateFakeWalletData = (): IWallet => {
    return {
        title: faker.commerce.productName() + ' contribution',
        charged_amount: +faker.commerce.price(),
        fixed: false,
    };
};

export const generateBadFakeWalletData = () => {
    return {
        title: faker.commerce.productName() + ' contribution',
        // charged_amount: +faker.commerce.price(),
        fixed: false,
    };
};

export const generateFakeID = () => {
    const hexString = faker.string.hexadecimal({ length: 24 });
    const objectId = hexString.match(/.{1,6}/g)?.join(':') || '';

    return objectId;
};
