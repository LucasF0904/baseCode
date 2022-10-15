export const PHONES = {
	name: 'phones',
	columns: [
		{
			name: 'id',
			type: 'uuid',
			isPrimary: true,
			generationStrategy: 'uuid',
			default: 'uuid_generate_v4()',
		},
		{
			name: 'number',
			type: 'uuid',
			isNullable: false,
		},
		{
			name: 'type',
			type: 'varchar',
			isNullable: false,
			isUnique: true,
		},
		{
			name: 'created_at',
			type: 'timestamp',
			default: 'now()',
			isNullable: true,
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
};

export const IDX_PHONE_ID = {
	name: 'IDX_PHONE_ID',
	columnNames: ['id'],
};
