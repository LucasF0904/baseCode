/* eslint-disable no-useless-escape */
class ZipCode {
	static isValidPostalCode(zipcode: string): boolean {
		const zipcodeRegex = /\d{2}\.\d{3}-\d{3}/;

		const valid = zipcodeRegex.test(zipcode);

		return valid;
	}

	static getOnlyNumbers(zipcode: string): string {
		const zipcodeClear = zipcode.replace(/\.|\-/g, '');

		return zipcodeClear;
	}
}

export default ZipCode;
