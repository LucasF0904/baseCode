const userDictionary = {
	USER_CPF_INVALID: {
		CODE: '1.1',
		MESSAGE: 'CPF não é válido.',
	},
	USER_NOT_FOUND: {
		CODE: '1.2',
		MESSAGE: 'Usuário não encontrado.',
	},
	USER_EMAIL_ALREADY_REGISTERED: {
		CODE: '1.3',
		MESSAGE: 'Usuário já cadastrado com esse e-mail.',
	},
	USER_DOCUMENT_ALREADY_REGISTERED: {
		CODE: '1.4',
		MESSAGE: 'Usuário já cadastrado com esse documento.',
	},
	USER_PHONE_INVALID: {
		CODE: '1.5',
		MESSAGE: 'Telefone não é valido.',
	},
};

export default userDictionary;
