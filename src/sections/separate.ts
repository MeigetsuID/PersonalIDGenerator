export function separate(str: string): string[] {
    const pLen = str.length / 2 + Number(str.length % 2 === 1);
    return [str.slice(0, pLen), str.slice(pLen)];
}

const TwoMergedSHA512TextReg = /^([0-9a-f]|[0-9A-F]){256}$/;

export function separateTwoMergedSHA512Text_4(str: string): string[] {
    if (!TwoMergedSHA512TextReg.test(str)) throw new Error('invalid two merged SHA512 text');
    /* v8 ignore next 2 */
    const strs = str.match(/.{1,64}/g) || [];
    if (strs.length !== 4) throw new Error('Split Error');
    return strs;
}
