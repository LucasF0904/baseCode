import { Joi as baseJoi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';
import JoiDate from '@joi/date';

const Joi = baseJoi.extend(JoiDate);

const schema = {
	email: Joi.string().required().email().messages(messages),
	password: Joi.string().required().min(6).messages(messages),
};

const rules = {
	[Segments.BODY]: schema,
};

export default rules;
