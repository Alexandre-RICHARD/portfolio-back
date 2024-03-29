export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            "LOCAL_PORT": number;
            "CORS_ORIGIN": string;
            "MAIL_SENDER_USER": string;
            "MAIL_SENDER_PASS": string;
            "MAIL_RECEIVER": string;
            "DB_HOST": string;
            "DB_PORT": number;
            "DB_USER": string;
            "DB_PASSWORD": string;
            "DB_DATABASE": string;
            "PROJECT_NAME": string;
            "ERROR_API_URL": string;
        }
    }
}
