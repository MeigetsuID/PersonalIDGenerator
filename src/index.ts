import { GetIDFrontIndex } from './frontIndex';
import { GetIDSequenceNumber } from './sequenceNumber';
import { CalcIDSerial } from './serial';
import { calcMagicNumber } from './magicNumber';

export default async function CreateID(UserID: string): Promise<string>;
export default async function CreateID(UserID: string, sequenceNumberCacheFile: string): Promise<string>;
export default async function CreateID(UserID: string, sequenceNumberCacheFile?: string): Promise<string> {
    const FrontIndex = GetIDFrontIndex(UserID);
    const Serial = CalcIDSerial(UserID);
    const SequenceNumber = await GetIDSequenceNumber(FrontIndex, Serial, sequenceNumberCacheFile);
    const IDBase = `${FrontIndex.toString().padStart(2, '0')}${Serial.toString().padStart(3, '0')}${SequenceNumber.toString().padStart(6, '0')}`;
    return `0${IDBase}${calcMagicNumber(IDBase)}`;
}
