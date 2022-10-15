export const LOG_AUTH = {
	name: 'log_auth',
	columns: [
		{
			name: 'id',
			type: 'uuid',
			isPrimary: true,
			generationStrategy: 'uuid',
			default: 'uuid_generate_v4()',
		},
		{
			name: 'user_id',
			type: 'uuid',
			isNullable: false,
		},
		{
			name: 'log',
			type: 'enum',
			precision: 1,
			isNullable: false,
			enum: ['login', 'logout', 'refresh'],
		},
		{
			name: 'created_at',
			type: 'timestamp',
			default: 'now()',
			isNullable: false,
		},
	],
	foreignKeys: [
		{
			// REGRA FK + NOME DA TABELA ATUAL + NOME COLUNA + TABELA REFERENCIA + NOME COLUNA REFERENCIA
			name: 'FK_LOG_AUTH_USER_ID_USER_ID',
			referencedTableName: 'users',
			referencedColumnNames: ['id'],
			columnNames: ['user_id'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
	],
};

export const IDX_LOG_AUTH_ID = {
	name: 'IDX_LOG_AUTH_ID',
	columnNames: ['id'],
};

export const IDX_LOG_AUTH_USERS_ID = {
	name: 'IDX_LOG_AUTH_USERS_ID',
	columnNames: ['user_id'],
};
