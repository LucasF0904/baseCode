import { readFileSync } from 'fs';
import { Request } from 'express';

const readFileToString = async (request: Request): Promise<string> => {
	const content = readFileSync(request.body);

	// const fileName = request.file?.filename;
	const fileContent = content.toString();

	// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
	/* const data = fs.readFile(__dirname + "/" + fileName, (error, data) => {
		if (error) {
			throw error;
		}
	}); */
	return fileContent;
};

export default readFileToString;
