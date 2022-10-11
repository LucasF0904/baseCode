/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable newline-per-chained-call */
import { Joi as baseJoi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';
import { shortName } from '@modules/shared/states/domain/interfaces/IState';
import JoiDate from '@joi/date';
import Documents from '@shared/util/Documents';
import Handler from '@shared/exceptions/Handler';
import moment from 'moment';
import userDictionary from '@shared/exceptions/dictionary/users';
import zipcodeDictionary from '@shared/exceptions/dictionary/zipcode';
import ZipCode from '@shared/util/ZipCode';

const Joi = baseJoi.extend(JoiDate);

const schema = {
	name: Joi.string().required().min(3).max(256).messages(messages),
	email: Joi.string().email().required().min(8).max(64).messages(messages),
	birthday: Joi.date()
		.format('DD/MM/YYYY')
		.custom((birthday: string) => {
			return moment(birthday);
		})
		.messages(messages),
	cpf: Joi.string()
		.required()
		.max(11)
		.custom((cpf: string): string => {
			if (!Documents.isCpfValid(cpf)) {
				throw new Handler(userDictionary.USER_CPF_INVALID.MESSAGE, userDictionary.USER_CPF_INVALID.CODE);
			}
			return Documents.getOnlyNumbers(cpf);
		})
		.messages(messages),
	password: Joi.string().required().min(8).max(16).messages(messages),
	passwordConfirmation: Joi.string().valid(Joi.ref('password')).messages(messages),
	isAdmin: Joi.boolean().required().messages(messages),
	address_data: Joi.object({
		zipcode: Joi.string()
			.custom((zipcode: string): string => {
				if (!ZipCode.isValidPostalCode(zipcode)) {
					throw new Handler(
						zipcodeDictionary.ZIPCODE_IS_NOT_VALID.MESSAGE,
						zipcodeDictionary.ZIPCODE_IS_NOT_VALID.CODE,
					);
				}

				return ZipCode.getOnlyNumbers(zipcode);
			})
			.messages(messages),
		address: Joi.string().min(1).max(256).messages(messages),
		district: Joi.string().min(1).max(32).messages(messages),
		number: Joi.string().min(1).max(8).messages(messages),
		complement: Joi.string().min(1).max(32).messages(messages),
		latitude: Joi.string().min(1).max(16).messages(messages),
		longitude: Joi.string()
			.min(1)
			.max(16)
			.when('latitude', {
				is: Joi.exist(),
				then: Joi.required(),
			})
			.messages(messages),
		state: Joi.string()
			.required()
			.min(2)
			.max(2)
			.valid(...Object.values(shortName).filter(k => typeof k === 'string'))
			.messages(messages),
		city: Joi.string().required().messages(messages),
	}).messages(messages),
	phones: Joi.string().max(14).messages(messages),
};
const rules = {
	[Segments.BODY]: schema,
};
export default rules;
