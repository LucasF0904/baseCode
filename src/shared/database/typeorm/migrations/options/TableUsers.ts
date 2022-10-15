export const USERS = {
	name: 'users',
	columns: [
		{
			name: 'id',
			type: 'uuid',
			isPrimary: true,
			generationStrategy: 'uuid',
			default: 'uuid_generate_v4()',
		},
		{
			name: 'address_id',
			type: 'uuid',
			isNullable: true,
		},
		{
			name: 'person_id',
			type: 'uuid',
			isNullable: true,
		},
		{
			name: 'email',
			type: 'varchar',
			precision: 64,
			isNullable: false,
			isUnique: true,
		},
		{
			name: 'password',
			type: 'varchar',
			isNullable: true,
		},
		{
			name: 'phone',
			type: 'uuid',
			isNullable: true,
			isUnique: false,
		},
		{
			name: 'avatar',
			type: 'varchar',
			precision: 256,
			isNullable: true,
		},
		{
			name: 'password',
			type: 'varchar',
			precision: 60,
			isNullable: false,
		},
		{
			name: 'active',
			type: 'boolean',
			isNullable: true,
		},
		{
			name: 'created_at',
			type: 'timestamp',
			default: 'now()',
		},
		{
			name: 'updated_at',
			type: 'timestamp',
			default: 'null',
			isNullable: true,
		},
		{
			name: 'deleted_at',
			type: 'timestamp',
			default: 'null',
			isNullable: true,
		},
	],
	foreignKeys: [
		{
			// REGRA FK + NOME DA TABELA ATUAL + NOME COLUNA + TABELA REFERENCIA + NOME COLUNA REFERENCIA
			name: 'FK_USERS_ADDRESS_ID_ADDRESS_ID',
			referencedTableName: 'address',
			referencedColumnNames: ['id'],
			columnNames: ['address_id'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
		{
			name: 'FK_USERS_PERSONS_ID_PERSONS_ID',
			referencedTableName: 'persons',
			referencedColumnNames: ['id'],
			columnNames: ['person_id'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
	],
};

export const IDX_USERS_ID = {
	name: 'IDX_USERS_ID',
	columnNames: ['id'],
};

export const IDX_USERS_ADDRESS_ID = {
	name: 'IDX_USERS_ADDRESS_ID',
	columnNames: ['address_id'],
};

export const IDX_USERS_PERSON_ID = {
	name: 'IDX_USERS_PERSON_ID',
	columnNames: ['person_id'],
};

export const IDX_USERS_PHONE_ID = {
	name: 'IDX_USERS_PERSON_ID',
	columnNames: ['phone'],
};
