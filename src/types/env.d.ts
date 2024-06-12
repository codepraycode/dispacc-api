declare namespace NodeJS {
    interface ProcessEnv {
        PORT?: string;
        NOBOX_API?: string;
        NOBOX_PROJECT?: string;
        NOBOX_TOKEN?: string;
        NODE_ENV?: 'development' | 'production' | 'test';
    }
}
