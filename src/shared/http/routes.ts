import { Router } from 'express';
import ApiResponse from '@shared/http/response/ApiResponse';
import cors from 'cors';
import options from '@config/cors';
import route from './importRoutes';

const router = Router();
router.use(cors(options));

router.get('/', (_request, response) => {
	const output = ApiResponse.execute('back on');
	return response.json(output);
});


router.use('/auth', route.authRouter);
router.use('/user', route.userRouter);
router.use('/address', route.addressRouter);
router.use('/city', route.cityRouter);
router.use('/country', route.countryRouter);
router.use('/phone', route.phoneRouter);
router.use('/registryNumber', route.registerNumberRouter);
router.use('/state', route.stateRouter);

export default router;
