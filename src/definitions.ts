export interface ExitAppPlugin {
    killApp(): Promise<void>
}
