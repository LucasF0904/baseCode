export default {
	jwt: {
		secret: String(process.env.APP_SECRET),
		expires: '8h',
	},
	refresh: {
		secret: String(process.env.APP_REFRESH_SECRET),
		expires: '7d',
	},
};

export interface ITokenPayload {
	iat: number;
	exp: number;
	id: string;
}
