import { calcMagicNumber } from '.';

const m10w3CheckDigit = (input: string): number => {
    const m10w3Total = [...input]
        .map(x => parseInt(x))
        .reverse()
        .reduce((acc, cur, idx) => acc + cur * (3 - Number(idx % 2 === 1) * 2), 0);
    return m10w3Total % 10 === 0 ? 0 : 10 - (m10w3Total % 10);
};

describe('Test Function Check', () => {
    it('check digit is 0', () => {
        expect(m10w3CheckDigit('20151119')).toBe(0);
    });
    it('check digit is not 0', () => {
        expect(m10w3CheckDigit('20151129')).toBe(9);
    });
});

describe('calcMagicNumber', () => {
    it('valid/magic number is 0', () => {
        const IDBase = '78426633591';
        expect(m10w3CheckDigit(`${IDBase}${calcMagicNumber(IDBase)}`)).toBe(0);
    });

    it('valid/magic number is not 0/pattern 1', () => {
        const IDBase = '78426033591';
        expect(m10w3CheckDigit(`${IDBase}${calcMagicNumber(IDBase)}`)).toBe(0);
    });

    it('valid/magic number is not 0/pattern 2', () => {
        const IDBase = '78426033593';
        expect(m10w3CheckDigit(`${IDBase}${calcMagicNumber(IDBase)}`)).toBe(0);
    });

    it('invalid/character error', () => {
        expect(() => calcMagicNumber('2015111a9')).toThrow('Input must be 11 digits');
    });

    it('invalid/length error', () => {
        expect(() => calcMagicNumber('20151119')).toThrow('Input must be 11 digits');
    });
});
