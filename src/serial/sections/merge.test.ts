import { merge16Numbers } from './merge';

describe('merge16Numbers', () => {
    it('valid', () => {
        expect(merge16Numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).toStrictEqual([
            '001002003004',
            '005006007008',
            '009010011012',
            '013014015016',
        ]);
    });
    it('invalid/less', () => {
        expect(() => merge16Numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toThrow('Invalid input');
    });
    it('invalid/more', () => {
        expect(() => merge16Numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])).toThrow(
            'Invalid input'
        );
    });
});
