import { registerPlugin } from '@capacitor/core';
const ExitApp = registerPlugin('ExitApp', {
    web: () => import('./web').then(m => new m.ExitAppWeb()),
});
export * from './definitions';
export { ExitApp };
//# sourceMappingURL=index.js.map