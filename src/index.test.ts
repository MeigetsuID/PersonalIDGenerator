import { writeJson } from 'nodeeasyfileio';
import CreateID from '.';
import { unlinkSync, existsSync } from 'node:fs';

describe('CreateID', () => {
    beforeAll(() => {
        if (existsSync('./system/sqn_nofile.dat')) unlinkSync('./system/sqn_nofile.dat');
        writeJson('./system/sqn_withfile.dat', { '70': { '455': 24 } }, true);
    });

    afterAll(() => {
        unlinkSync('./system/sqn_withfile.dat');
        unlinkSync('./system/sqn_nofile.dat');
    });

    it('no file', async () => {
        expect(await CreateID('kamioda', './system/sqn_nofile.dat')).toBe('0704550000003');
    });

    it('with file', async () => {
        expect(await CreateID('kamioda', './system/sqn_withfile.dat')).toBe('0704550000243');
    });
});
