import pino from 'pino';
import logger from '@config/logger';

export default pino({
	enabled: Boolean(logger.enabled),
	level: logger.level,
});
