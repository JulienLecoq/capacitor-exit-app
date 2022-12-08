var capacitorExitApp = (function (exports, core) {
    'use strict';

    const ExitApp = core.registerPlugin('ExitApp', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ExitAppWeb()),
    });

    class ExitAppWeb extends core.WebPlugin {
        killApp() {
            throw this.unimplemented("Not available on Web");
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ExitAppWeb: ExitAppWeb
    });

    exports.ExitApp = ExitApp;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
