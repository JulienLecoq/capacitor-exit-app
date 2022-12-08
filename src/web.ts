import { WebPlugin } from '@capacitor/core'

import type { ExitAppPlugin } from './definitions'

export class ExitAppWeb extends WebPlugin implements ExitAppPlugin {
    killApp(): Promise<void> {
        throw this.unimplemented("Not available on Web")

    }
}
