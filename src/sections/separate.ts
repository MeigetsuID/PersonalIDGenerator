export function separate(str: string): string[] {
    const pLen = str.length / 2 + Number(str.length % 2 === 1);
    return [str.slice(0, pLen), str.slice(pLen)];
}
