/* eslint-disable newline-per-chained-call */
import { Joi as baseJoi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';
import JoiDate from '@joi/date';
import zipcodeDictionary from '@shared/exceptions/dictionary/zipcode';
import ZipCode from '@shared/util/ZipCode';
import Handler from '@shared/exceptions/Handler';
import { shortName } from '@modules/shared/states/domain/interfaces/IState';
import moment from 'moment';

const Joi = baseJoi.extend(JoiDate);

const schema = {
	address: Joi.object({
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
		longitude: Joi.string().min(1).max(16).messages(messages),
		state: Joi.string()
			.min(2)
			.max(2)
			.valid(...Object.values(shortName).filter(k => typeof k === 'string'))
			.messages(messages),
		city: Joi.string().messages(messages),
	}).messages(messages),
	email: Joi.string().email().min(8).max(64).messages(messages),
	phones: Joi.string().max(14).messages(messages),
	name: Joi.string().min(3).max(256).messages(messages),
	birthday: Joi.date()
		.format('DD/MM/YYYY')
		.custom((birthday: string) => {
			return moment(birthday);
		})
		.messages(messages),
	password: Joi.string().min(8).max(16).messages(messages),
	isAdmin: Joi.boolean().messages(messages),
};

const rules = {
	[Segments.BODY]: schema,
};

export default rules;
