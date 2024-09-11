import { separate, separateTwoMergedSHA512Text } from './separate';

describe('separate', () => {
    it('length is odd', () => {
        expect(separate('abcde')).toEqual(['abc', 'de']);
    });
    it('length is even', () => {
        expect(separate('abcd')).toEqual(['ab', 'cd']);
    });
});

describe('separateTwoMergedSHA512Text', () => {
    it('valid/lower', () => {
        expect(separateTwoMergedSHA512Text('a'.repeat(256))).toEqual(['a'.repeat(64), 'a'.repeat(64), 'a'.repeat(64), 'a'.repeat(64)]);
    });
    it('valid/upper', () => {
        expect(separateTwoMergedSHA512Text('A'.repeat(256))).toEqual(['A'.repeat(64), 'A'.repeat(64), 'A'.repeat(64), 'A'.repeat(64)]);
    });
    it('invalid/length error', () => {
        expect(() => separateTwoMergedSHA512Text('a'.repeat(255))).toThrow('invalid two merged SHA512 text');
    });
    it('invalid/character error', () => {
        expect(() => separateTwoMergedSHA512Text('g'.repeat(256))).toThrow('invalid two merged SHA512 text');
    });
});
