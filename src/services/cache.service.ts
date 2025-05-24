export class CacheService {
    private cache: Map<string, any>;

    constructor() {
        this.cache = new Map();
    }

    // Store cached content
    public setCache(key: string, value: any): void {
        this.cache.set(key, value);
    }

    // Retrieve cached content
    public getCache(key: string): any | undefined {
        return this.cache.get(key);
    }

    // Clear cached content
    public clearCache(): void {
        this.cache.clear();
    }

    // Check if content is cached
    public isCached(key: string): boolean {
        return this.cache.has(key);
    }
}