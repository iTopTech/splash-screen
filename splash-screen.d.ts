
declare module "splash-screen" {
    export default Splash;
}
declare var Splash: Splash;

interface Splash {
    version: string;

    enable(theme: string): void;

    isRunning(): void;

    destroy(): void;

}
