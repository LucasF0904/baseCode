import authRouter from '@modules/auth/infra/http/routes/auth.routes';
import userRouter from '@modules/user/infra/http/routes/user.routes';
import addressRouter from '@modules/shared/address/infra/http/routes/Address.routes';
import cityRouter from '@modules/shared/cities/infra/http/routes/city.routes';
import countryRouter from '@modules/shared/country/infra/http/routes/country.routes';
import phoneRouter from '@modules/shared/phone/infra/http/routes/Phone.routes';
import registerNumberRouter from '@modules/shared/registryNumber/infra/http/routes/registryNumber.routes';
import stateRouter from '@modules/shared/states/infra/http/routes/state.routes';


const route = {
    userRouter,
    authRouter,
    addressRouter,
    cityRouter,
    countryRouter,
    phoneRouter,
    registerNumberRouter,
    stateRouter,
}

export default route;