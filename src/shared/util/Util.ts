class Util {
	static checkNullOrEmpty<T>(variable: T | string | number): boolean {
		return (
			typeof variable === 'undefined' ||
			variable === undefined ||
			variable === null ||
			variable === '' ||
			variable === '0' ||
			variable === 0
		);
	}
}

export default Util;
