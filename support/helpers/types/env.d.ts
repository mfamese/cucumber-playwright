export {};

declare global {
    namespace NodeJS {
        interface processENV{
            BROWSER: "chrome" | "firefox" | "webkit"| "msedge",
            ENV: "staging" | "dev" | "test",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}