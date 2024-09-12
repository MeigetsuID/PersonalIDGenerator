import { readJson, writeJson } from 'nodeeasyfileio';
import AsyncLock from 'async-lock';
import { existsSync } from 'node:fs';
const lock = new AsyncLock();

export type SerialIndexTable = {
    [serial: string]: number
};

export type SequenceNumberTable = {
    [index: string]: SerialIndexTable
};

export function GetIDSequenceNumber(frontIndex: number, serial: number): Promise<number> {
    const FrontIndexText = frontIndex.toString().padStart(2, '0');
    const SerialText = serial.toString().padStart(3, '0');
    return lock.acquire('sequenceNumber', () => {
        const sequenceNumberTable = existsSync('./system/sqn.dat') ? readJson<SequenceNumberTable>('./system/sqn.dat') : {};
        if (!sequenceNumberTable[FrontIndexText]) sequenceNumberTable[FrontIndexText] = {};
        if (!sequenceNumberTable[FrontIndexText][SerialText]) sequenceNumberTable[FrontIndexText][SerialText] = 0;
        const Ret = sequenceNumberTable[FrontIndexText][SerialText]++;
        writeJson('./system/sqn.dat', sequenceNumberTable, true);
        return Ret;
    });
}
