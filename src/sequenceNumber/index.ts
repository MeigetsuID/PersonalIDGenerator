import { readJson, writeJson } from 'nodeeasyfileio';
import AsyncLock from 'async-lock';
import { existsSync } from 'node:fs';
const lock = new AsyncLock();

export type SerialIndexTable = {
    [serial: string]: number;
};

export type SequenceNumberTable = {
    [index: string]: SerialIndexTable;
};

export function GetIDSequenceNumber(frontIndex: number, serial: number, sequenceNumberCacheFile?: string): Promise<number> {
    if (!sequenceNumberCacheFile) return GetIDSequenceNumber(frontIndex, serial, './system/sqn.dat');
    const FrontIndexText = frontIndex.toString().padStart(2, '0');
    const SerialText = serial.toString().padStart(3, '0');
    return lock.acquire('sequenceNumber', () => {
        const sequenceNumberTable = existsSync(sequenceNumberCacheFile)
            ? readJson<SequenceNumberTable>(sequenceNumberCacheFile)
            : {};
        if (!sequenceNumberTable[FrontIndexText]) sequenceNumberTable[FrontIndexText] = {};
        if (!sequenceNumberTable[FrontIndexText][SerialText]) sequenceNumberTable[FrontIndexText][SerialText] = 0;
        const Ret = sequenceNumberTable[FrontIndexText][SerialText]++;
        writeJson(sequenceNumberCacheFile, sequenceNumberTable, true);
        return Ret;
    });
}
