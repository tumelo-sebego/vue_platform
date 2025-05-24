export interface CachedContent {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
}

export interface DatabaseConfig {
    databaseName: string;
    version: number;
    description: string;
}

export interface CacheServiceOptions {
    maxCacheSize: number;
    expirationTime: number; // in milliseconds
}