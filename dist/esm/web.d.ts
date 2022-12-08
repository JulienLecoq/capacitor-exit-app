import { WebPlugin } from '@capacitor/core';
import type { ExitAppPlugin } from './definitions';
export declare class ExitAppWeb extends WebPlugin implements ExitAppPlugin {
    killApp(): Promise<void>;
}
