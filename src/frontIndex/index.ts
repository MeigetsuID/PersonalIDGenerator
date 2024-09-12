const Table = [
    { values: '0123456789' },
    { values: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', add: 20 },
    { values: 'abcdefghijklmnopqrstuvwxyz', add: 60 },
];

export function GetIDFrontIndex(id: string): number {
    const values = Table.map(i => {
        const index = [...i.values].indexOf(id[0]);
        return index < 0 ? -1 : index + (i.add || 0)
    });
    return Math.max(...values);
}
