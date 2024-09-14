const AllowedPattern = /^[0-9]{11}$/;

export function calcMagicNumber(IDBase: string): number {
    if (!AllowedPattern.test(IDBase)) throw new Error('Input must be 11 digits');
    const m10w3Total = [...IDBase]
        .map(x => parseInt(x))
        .reverse()
        .reduce((acc, cur, idx) => acc + cur * (1 + (idx % 2) * 2), 0);
    if (m10w3Total % 10 === 0) return 0;
    const Next10DivivableVal = (Math.floor(m10w3Total / 10) + 1) * 10;
    const Diff = Next10DivivableVal - m10w3Total;
    const DivMod = Diff % 3;
    return (Diff + (DivMod === 0 ? 0 : (3 - DivMod) * 10)) / 3;
}
