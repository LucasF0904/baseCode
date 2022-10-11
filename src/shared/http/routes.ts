import { Router } from 'express';
import ApiResponse from '@shared/http/response/ApiResponse';

import authRouter from '@modules/auth/infra/http/routes/auth.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import companiesRouter from '@modules/companies/infra/http/routes/companies.routes';
import profileRouter from '@modules/shared/profiles/infra/http/routes/profiles.routes';
import areaRouter from '@modules/shared/area/infra/http/routes/area.routes';
import modulesRouter from '@modules/modules/infra/http/routes/modules.routes';
import teamsRouter from '@modules/teams/infra/http/routes/team.routes';
import cyclesRouter from '@modules/cycles/infra/http/routes/cycles.routes';
import usersCyclesRouter from '@modules/shared/user_cycles/infra/http/routes/usersCycles.routes';
import addressRouter from '@modules/shared/address/infra/http/routes/address.routes';

import cors from 'cors';
import options from '@config/cors';

const router = Router();
router.use(cors(options));

router.get('/', (_request, response) => {
	const output = ApiResponse.execute('advy-back on');
	return response.json(output);
});
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/companies', companiesRouter);
router.use('/profiles', profileRouter);
router.use('/area', areaRouter);
router.use('/modules', modulesRouter);
router.use('/teams', teamsRouter);
router.use('/cycles', cyclesRouter);
router.use('/usersCycles', usersCyclesRouter);
router.use('/address', addressRouter);

export default router;
