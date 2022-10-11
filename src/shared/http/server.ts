import logger from '@shared/logger';
import config from '@config/app';
import { app } from './app';

app.listen(config.port, () => {
	logger.info(`server listening on port ${config.port}`);
});
