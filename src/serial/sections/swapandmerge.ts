export function SwapAndMerge(strs: string[]): string {
    if (strs.length !== 2) throw new Error('string array length is not 2');
    return strs[1] + strs[0];
}

export function SwapAndMerge_Multiple(strs: string[]): string[] {
    if (strs.length === 0) throw new Error('string array is empty');
    if (strs.length % 2 !== 0) throw new Error('string array length is not even');
    const result: string[] = [];
    for (let i = 0; i < strs.length; i += 2) {
        result.push(SwapAndMerge([strs[i], strs[i + 1]]));
    }
    return result;
}
