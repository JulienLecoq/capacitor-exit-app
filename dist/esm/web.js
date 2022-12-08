import { WebPlugin } from '@capacitor/core';
export class ExitAppWeb extends WebPlugin {
    killApp() {
        throw this.unimplemented("Not available on Web");
    }
}
//# sourceMappingURL=web.js.map