import { existsSync, unlinkSync } from 'node:fs';
import { GetIDSequenceNumber } from '.';

describe('GetIDSequenceNumber', () => {
    beforeAll(() => {
        if (existsSync('./system/sqn.dat')) unlinkSync('./system/sqn.dat');
    });
    afterAll(() => {
        if (existsSync('./system/sqn.dat')) unlinkSync('./system/sqn.dat');
    });
    it('test', async () => {
        expect(await GetIDSequenceNumber(0, 0)).toBe(0);
        expect(await GetIDSequenceNumber(0, 0)).toBe(1);
        expect(await GetIDSequenceNumber(0, 5)).toBe(0);
        expect(await GetIDSequenceNumber(1, 0)).toBe(0);
    });
});
