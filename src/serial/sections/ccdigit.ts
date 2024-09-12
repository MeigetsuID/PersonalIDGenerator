const AllowedPattern = /^[0-9]+$/;

export function CalcCheckDigitWithCorpNumberCheckDigitAlgorithm(numStr: string): number {
    if (!AllowedPattern.test(numStr)) throw new Error('Invalid input');
    return (
        9 -
        ([...numStr]
            .map(i => parseInt(i))
            .reverse()
            .reduce((acc, cur, idx) => acc + cur * ((idx % 2) + 1)) %
            9)
    );
}
