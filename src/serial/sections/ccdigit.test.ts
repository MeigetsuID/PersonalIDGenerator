import { CalcCheckDigitWithCorpNumberCheckDigitAlgorithm } from './ccdigit';

describe('CalcCheckDigitWithCorpNumberCheckDigitAlgorithm', () => {
    it('valid 1', () => {
        expect(CalcCheckDigitWithCorpNumberCheckDigitAlgorithm('010404006753')).toBe(4);
    });
    it('valid 2', () => {
        expect(CalcCheckDigitWithCorpNumberCheckDigitAlgorithm('000011000005')).toBe(1);
    });
    it('invalid', () => {
        expect(() => CalcCheckDigitWithCorpNumberCheckDigitAlgorithm('12345678a')).toThrow();
    });
});
