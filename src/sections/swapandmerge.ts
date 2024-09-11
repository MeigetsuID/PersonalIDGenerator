export function SwapAndMerge(strs: string[]): string {
    if (strs.length !== 2) throw new Error('string array length is not 2');
    return strs[1] + strs[0];
}
