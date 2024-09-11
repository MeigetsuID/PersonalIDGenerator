import { convertHexadecimals } from "./convert";

describe('convertHexadecimals', () => {
    it('valid/lower', () => {
        expect(convertHexadecimals('ab09cd1ef')).toBe('101100091213011415');
    });
    it('valid/upper', () => {
        expect(convertHexadecimals('AB09CD1EF')).toBe('101100091213011415');
    });
    it('invalid/character error', () => {
        expect(() => convertHexadecimals('ghijkl')).toThrow('Invalid input');
    });
    it('invalid/length error', () => {
        expect(() => convertHexadecimals('abcdefg')).toThrow('Invalid input');
    });
});
