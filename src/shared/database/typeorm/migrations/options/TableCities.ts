export const CITIES = {
	name: 'cities',
	columns: [
		{
			name: 'id',
			type: 'uuid',
			isPrimary: true,
			generationStrategy: 'uuid',
			default: 'uuid_generate_v4()',
		},
		{
			name: 'state_id',
			type: 'uuid',
			isNullable: false,
		},
		{
			name: 'code',
			type: 'int',
			isNullable: false,
			isUnique: true,
			comment: 'IBGE code',
		},
		{
			name: 'name',
			type: 'varchar',
			precision: 32,
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
	foreignKeys: [
		{
			// REGRA FK + NOME DA TABELA ATUAL + NOME COLUNA + TABELA REFERENCIA + NOME COLUNA REFERENCIA
			name: 'FK_CITY_STATE_ID_STATE_ID',
			referencedTableName: 'states',
			referencedColumnNames: ['id'],
			columnNames: ['state_id'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
	],
};

export const IDX_CITY_ID = {
	name: 'IDX_CITY_ID',
	columnNames: ['id'],
};

export const IDX_CITY_STATE_ID = {
	name: 'IDX_CITY_STATE_ID',
	columnNames: ['state_id'],
};
