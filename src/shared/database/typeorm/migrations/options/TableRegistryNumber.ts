export const REGISTRYNUMBER = {
	name: 'registryNumber',
	columns: [
		{
			name: 'id',
			type: 'varchar',
			isPrimary: true,
			generationStrategy: 'uuid',
		},
		{
			name: 'number',
			type: 'varchar',
			precision: 100,
			isNullable: false,
			isUnique: true,
		},
		{
			name: 'type',
			type: 'varchar',
			precision: 20,
			isNullable: false,
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

export const IDX_REGISTRYNUMBER_ID = {
	name: 'IDX_REGISTRYNUMBER_ID',
	columnNames: ['id'],
};
