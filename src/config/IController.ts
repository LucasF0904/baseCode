/* eslint-disable @typescript-eslint/no-explicit-any */
import { IActionResult } from './IActionResult';

export interface IController {
	Handle: (request: any, organizationId?: any) => Promise<IActionResult>;
}
