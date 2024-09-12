const AllowedPattern = /^[0-9]+$/;

export function m10w4Total(str: string): number {
    if (!AllowedPattern.test(str)) throw new Error('Invalid input');
    return [...str].map(i => parseInt(i)).reduce((acc, cur, idx) => acc + cur * ((idx % 4) + 1));
}
