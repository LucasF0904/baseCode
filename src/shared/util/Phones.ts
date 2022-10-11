/* eslint-disable no-useless-escape */
class Phones {
	static isValidPhone(phoneNumber: string): boolean {
		const brazilianPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;

		return brazilianPhoneRegex.test(phoneNumber);
	}

	static getOnlyNumbers(phoneNumber: string): string {
		const phoneNumberClear = phoneNumber.replace(/[\(\)\.\s-]+/g, '');

		return phoneNumberClear;
	}
}

export default Phones;
