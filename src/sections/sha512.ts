import { ToHash } from '@meigetsusoft/hash';

export function ToSHA512(strs: string[]): string[] {
    if (strs.length === 0) throw new Error('string array is empty');
    return strs.map(str => ToHash(str, 'sha512'));
}
