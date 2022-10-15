export const PERSONS = {
	name: 'persons',
	columns: [
		{
			name: 'id',
			type: 'uuid',
			isPrimary: true,
			generationStrategy: 'uuid',
			default: 'uuid_generate_v4()',
		},
		{
			name: 'name',
			type: 'varchar',
			precision: 256,
			isNullable: false,
		},
		{
			name: 'birthdate',
			type: 'varchar',
			isNullable: true,
		},
		{
			name: 'gender',
			type: 'enum',
			precision: 1,
			isNullable: true,
			enum: ['M', 'F', 'N'],
		},
		{
			name: 'cpf',
			type: 'varchar',
			precision: 16,
			isNullable: true,
			isUnique: true,
		},
		{
			name: 'passport',
			type: 'varchar',
			precision: 16,
			isNullable: true,
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

export const IDX_PERSONS_ID = {
	name: 'IDX_PERSONS_ID',
	columnNames: ['id'],
};
