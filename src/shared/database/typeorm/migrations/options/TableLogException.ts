export const LOG_EXCEPTION = {
	name: 'log_exception',
	columns: [
		{
			name: 'id',
			type: 'uuid',
			isPrimary: true,
			generationStrategy: 'uuid',
			default: 'uuid_generate_v4()',
		},
		{
			name: 'message',
			type: 'varchar',
			precision: 256,
			isNullable: false,
		},
		{
			name: 'code',
			type: 'varchar',
			precision: 8,
			isNullable: true,
			default: 'null',
		},
		{
			name: 'type',
			type: 'varchar',
			precision: 128,
			isNullable: false,
			comment: 'type exception example: "Exception, Celebrate, AuthError".',
		},
		{
			name: 'stack',
			type: 'text',
			isNullable: true,
			default: 'null',
		},
		{
			name: 'agent',
			type: 'varchar',
			precision: 128,
			isNullable: true,
			default: 'null',
		},
		{
			name: 'ip',
			type: 'cidr',
			isNullable: true,
			default: 'null',
		},
		{
			name: 'url',
			type: 'varchar',
			precision: 128,
			isNullable: true,
			default: 'null',
		},
		{
			name: 'method',
			type: 'enum',
			precision: 64,
			isNullable: true,
			enum: [
				'get',
				'post',
				'put',
				'patch',
				'delete',
				'copy',
				'head',
				'options',
				'link',
				'unlink',
				'purge',
				'lock',
				'unlock',
				'propfind',
				'view',
			],
		},
		{
			name: 'data',
			type: 'text',
			isNullable: true,
			default: 'null',
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

export const IDX_LOG_EXCEPTION_ID = {
	name: 'IDX_LOG_EXCEPTION_ID',
	columnNames: ['id'],
};
