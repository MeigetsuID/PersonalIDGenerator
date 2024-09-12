export function merge16Numbers(nums: number[]): string[] {
    if (nums.length !== 16) throw new Error('Invalid input');
    const result = ['', '', '', ''];
    for (let i = 0; i < 16; i += 4) {
        result[Math.trunc(i / 4)] = nums
            .slice(i, i + 4)
            .map(i => i.toString().padStart(3, '0'))
            .reduce((acc, cur) => acc + cur);
    }
    return result;
}
