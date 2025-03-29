import { LRUCache } from "lru-cache";

const ipCache = new LRUCache<string, number>({
    max: 500,
    ttl: 3600 * 1000,
});

export function storeIp(ip: string) {
    ipCache.set(ip, Date.now());
}

export function hasIp(ip: string): boolean {
    return ipCache.has(ip);
}
