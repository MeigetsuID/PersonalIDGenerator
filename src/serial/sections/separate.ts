export function separateId(str: string): string[] {
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

export function separateTwoMergedSHA512Text_8(str: string): string[] {
    if (!TwoMergedSHA512TextReg.test(str)) throw new Error('invalid two merged SHA512 text');
    /* v8 ignore next 2 */
    const strs = str.match(/.{1,32}/g) || [];
    if (strs.length !== 8) throw new Error('Split Error');
    return strs;
}

const FourMergedSHA512Text = /^([0-9a-f]|[0-9A-F]){512}$/;

export function separateFourMergedSHA512Text_16(str: string): string[] {
    if (!FourMergedSHA512Text.test(str)) throw new Error('invalid two merged SHA512 text');
    /* v8 ignore next 2 */
    const strs = str.match(/.{1,32}/g) || [];
    if (strs.length !== 16) throw new Error('Split Error');
    return strs;
}

const numTextPattern = /^\d+$/;

export function separateNumTextToMax4Digit(numStr: string): string[] {
    if (!numTextPattern.test(numStr)) throw new Error('invalid number text');
    /* v8 ignore next */
    return numStr.match(/.{1,4}/g) || [];
}
