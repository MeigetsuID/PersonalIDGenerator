import { separate } from './separate';

describe('separate', () => {
    it('length is odd', () => {
        expect(separate('abcde')).toEqual(['abc', 'de']);
    });
    it('length is even', () => {
        expect(separate('abcd')).toEqual(['ab', 'cd']);
    });
});
