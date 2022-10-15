export const ADDRESS = {
	name: 'address',
	columns: [
		{
			name: 'id',
			type: 'varchar',
			isPrimary: true,
			generationStrategy: 'uuid',
		},
		{
			name: 'fullAddress',
			type: 'varchar',
			precision: 100,
			isNullable: false,
		},
		{
			name: 'complement',
			type: 'varchar',
			precision: 32,
			isNullable: false,
		},
		{
			name: 'district',
			type: 'varchar',
			precision: 32,
			isNullable: false,
		},
		{
			name: 'city_id',
			type: 'varchar',
			isNullable: false,
		},
		{
			name: 'postalCode',
			type: 'varchar',
			precision: 20,
			isNullable: false,
		},
		{
			name: 'geoLocation',
			type: 'varchar',
			precision: 200,
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
			name: 'FK_ADDRESS_CITY_ID_CITY_ID',
			referencedTableName: 'cities',
			referencedColumnNames: ['id'],
			columnNames: ['city_id'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
	],
};

export const IDX_ADDRESS_ID = {
	name: 'IDX_ADDRESS_ID',
	columnNames: ['id'],
};

export const IDX_ADDRESS_CITY_ID = {
	name: 'IDX_ADDRESS_CITY_ID',
	columnNames: ['city_id'],
};
