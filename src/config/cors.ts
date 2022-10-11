/* eslint-disable no-useless-escape */
import cors from 'cors';

const allowedOrigins = [/\dev.baseCode$/, /\homolocagacao.baseCode$/, /\baseCode$/];

const options: cors.CorsOptions = {
	origin: allowedOrigins,
};

export default options;
