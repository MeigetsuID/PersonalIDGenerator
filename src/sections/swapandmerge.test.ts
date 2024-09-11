import { SwapAndMerge, SwapAndMerge_Multiple } from './swapandmerge';

describe('SwapAndMerge', () => {
    it('length is 2', () => {
        expect(SwapAndMerge(['abc', 'def'])).toBe('defabc');
    });
    it('length is not 2', () => {
        expect(() => SwapAndMerge(['abc'])).toThrow('string array length is not 2');
    });
});

describe('SwapAndMerge_Multiple', () => {
    it('length is even', () => {
        expect(SwapAndMerge_Multiple(['abc', 'def', 'ghi', 'jkl'])).toStrictEqual(['defabc', 'jklghi']);
    });
    it('length is not even', () => {
        expect(() => SwapAndMerge_Multiple(['abc', 'def', 'ghi'])).toThrow('string array length is not even');
    });
    it('length is 0', () => {
        expect(() => SwapAndMerge_Multiple([])).toThrow('string array is empty');
    });
});
