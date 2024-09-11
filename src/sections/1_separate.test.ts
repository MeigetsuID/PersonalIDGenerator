import { separate } from './1_separate';

describe('1_separate', () => {
    it('length is odd', () => {
        expect(separate('abcde')).toEqual(['abc', 'de']);
    });
    it('length is even', () => {
        expect(separate('abcd')).toEqual(['ab', 'cd']);
    });
});
