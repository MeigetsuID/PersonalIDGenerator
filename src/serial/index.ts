import * as separator from './sections/separate';
import * as swapandmerge from './sections/swapandmerge';
import * as sha512 from './sections/sha512';
import * as convert from './sections/convert';
import * as modulus from './sections/modulus';
import * as merge from './sections/merge';
import * as ccdigit from './sections/ccdigit';

export function CalcIDSerial(id: string): number {
    // section 1
    const s1Result = separator.separateId(id);
    // section 2～3
    const s2_3Result = swapandmerge.SwapAndMerge(sha512.ToSHA512(s1Result));
    // section 4
    const s4Result = separator.separateTwoMergedSHA512Text_4(s2_3Result);
    // section 5
    const s5Result = swapandmerge.SwapAndMerge_Multiple(s4Result).join('');
    // section 6
    const s6Result = separator.separateTwoMergedSHA512Text_8(s5Result);
    // section 7
    const s7Result = swapandmerge.SwapAndMerge_Multiple(s6Result);
    // section 8
    const s8Result = sha512.ToSHA512(s7Result).join('');
    // section 9
    const s9Result = separator.separateFourMergedSHA512Text_16(s8Result);
    // section 10
    const s10Result = s9Result.map(convert.convertHexadecimals);
    // section 11
    const s11Result = s10Result.map(modulus.m10w4Total);
    // section 12
    const s12Result = merge
        .merge16Numbers(s11Result)
        .map(i => `${ccdigit.CalcCheckDigitWithCorpNumberCheckDigitAlgorithm(i)}${i}`);
    // section 13
    const s13Result = separator.separateNumTextToMax4Digit(
        s12Result
            .map(i => parseInt(i))
            .reduce((acc, cur) => acc + cur)
            .toString()
    );
    // section 14
    const s14Result = s13Result.map(i => parseInt(i)).reduce((acc, cur, idx) => acc + cur * (idx + 1));
    // section 15
    return s14Result % 1000;
}
