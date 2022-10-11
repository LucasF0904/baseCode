/* eslint-disable @typescript-eslint/ban-types */
import maskJSONOptions from '@config/maskJSONOptions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MaskData = require('maskdata');

class Mask {
	static maskData(obj: object): object {
		return MaskData.maskJSONFields(obj, maskJSONOptions);
	}
}

export default Mask;
