import Redis, { Redis as RedisClient } from 'ioredis';

import cache from '@config/cache';
import cacheConfig from '@shared/cache/CacheConfig';

class CacheRedis {
	private client: RedisClient;

	constructor() {
		this.client = new Redis(cacheConfig.config.redis);
	}

	public async save<T>(key: string, value: T, expireat?: number | undefined): Promise<void> {
		await this.client.set(key, JSON.stringify(value));
		await this.setTheKeyExpirationTime(key, expireat);
	}

	public async recover<T>(key: string): Promise<T | null | any> {
		const data = await this.client.get(key);

		if (!data) {
			return null;
		}

		try {
			const parsedData = JSON.parse(data) as T;
			return parsedData;
		} catch (error) {
			return data;
		}
	}

	public async match(partialKey: string): Promise<string[]> {
		const keys = await this.client.keys(`*${partialKey}*`);

		return keys;
	}

	public async invalidate(key: string): Promise<void> {
		await this.client.del(key);
	}

	public async modify<T>(key: string, value: T): Promise<void> {
		await this.client.set(key, JSON.stringify(value));
	}

	private async setTheKeyExpirationTime(key: string, expireat: number | undefined): Promise<void> {
		await this.client.expire(key, expireat === undefined ? cache.expires : expireat);
	}
}

export default CacheRedis;
