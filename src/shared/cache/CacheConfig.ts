import cache from '@config/cache';
import ICacheConfig from '@shared/cache/interfaces/ICacheConfig';

export default {
	config: {
		redis: {
			host: cache.redis.host,
			port: cache.redis.port,
			//password: cache.redis.password,
		},
	},
	driver: cache.redis.drive,
} as ICacheConfig;
