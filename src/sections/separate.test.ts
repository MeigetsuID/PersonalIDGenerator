import { separate, separateTwoMergedSHA512Text_4, separateTwoMergedSHA512Text_8 } from './separate';

describe('separate', () => {
    it('length is odd', () => {
        expect(separate('abcde')).toStrictEqual(['abc', 'de']);
    });
    it('length is even', () => {
        expect(separate('abcd')).toStrictEqual(['ab', 'cd']);
    });
});

describe('separateTwoMergedSHA512Text_4', () => {
    it('valid/lower', () => {
        expect(separateTwoMergedSHA512Text_4('a'.repeat(256))).toStrictEqual(['a'.repeat(64), 'a'.repeat(64), 'a'.repeat(64), 'a'.repeat(64)]);
    });
    it('valid/upper', () => {
        expect(separateTwoMergedSHA512Text_4('A'.repeat(256))).toStrictEqual(['A'.repeat(64), 'A'.repeat(64), 'A'.repeat(64), 'A'.repeat(64)]);
    });
    it('invalid/length error', () => {
        expect(() => separateTwoMergedSHA512Text_4('a'.repeat(255))).toThrow('invalid two merged SHA512 text');
    });
    it('invalid/character error', () => {
        expect(() => separateTwoMergedSHA512Text_4('g'.repeat(256))).toThrow('invalid two merged SHA512 text');
    });
});

describe('separateTwoMergedSHA512Text_8', () => {
    it('valid/lower', () => {
        expect(separateTwoMergedSHA512Text_8('a'.repeat(256))).toStrictEqual([
            'a'.repeat(32),
            'a'.repeat(32), 
            'a'.repeat(32),
            'a'.repeat(32),
            'a'.repeat(32),
            'a'.repeat(32),
            'a'.repeat(32),
            'a'.repeat(32),
        ]);
    });
    it('valid/upper', () => {
        expect(separateTwoMergedSHA512Text_8('A'.repeat(256))).toStrictEqual([
            'A'.repeat(32),
            'A'.repeat(32),
            'A'.repeat(32),
            'A'.repeat(32),
            'A'.repeat(32),
            'A'.repeat(32),
            'A'.repeat(32),
            'A'.repeat(32),
        ]);
    });
    it('invalid/length error', () => {
        expect(() => separateTwoMergedSHA512Text_8('a'.repeat(255))).toThrow('invalid two merged SHA512 text');
    });
    it('invalid/character error', () => {
        expect(() => separateTwoMergedSHA512Text_8('g'.repeat(256))).toThrow('invalid two merged SHA512 text');
    });
});
