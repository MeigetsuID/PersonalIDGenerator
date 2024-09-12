import { m10w4Total } from './modulus';

describe('m10w4Total', () => {
    it('valid', () => {
        expect(m10w4Total('1234567890')).toBe(109);
    });
    it('invalid/character error', () => {
        expect(() => m10w4Total('123456789a')).toThrow('Invalid input');
    });
});
