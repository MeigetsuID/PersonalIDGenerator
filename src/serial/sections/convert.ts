const AllowedPattern = /^([0-9a-f]|[0-9A-F])+$/;

export function convertHexadecimals(str: string): string {
    if (!AllowedPattern.test(str)) throw new Error('Invalid input');
    return [...str].map((char) => parseInt(char, 16).toString().padStart(2, '0')).join('');
}
