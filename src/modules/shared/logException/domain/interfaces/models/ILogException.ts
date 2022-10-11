export enum methodType {
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
}

interface ILogException {
	id: string;
	message: string;
	type: string;
	stack: string | null;
	code: string | null;
	agent: string;
	ip: string;
	url: string;
	method: methodType;
	data: string;
	created_at: string;
	updated_at: string;
	deleted_at: string;
}

export default ILogException;
