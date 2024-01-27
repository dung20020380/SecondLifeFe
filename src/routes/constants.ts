import Home from '../pages/home/Home';
import RegisterCustomer from '../pages/registerCustomer/RegisterCustomer';
import RegisterSell from '../pages/registerSell/RegisterSell';
import Profile from '../pages/profile/Profile';
import DetailProduct from '../pages/detailProduct/DetailProduct';


const PAGES = {
    home: '/' ,
    registerCustomer: '/register-customer',
    registerSell: '/register-sell',
    profile: '/profile',
    detailProduct: '/detail-product',

};

const publicRouter = [
    { path: PAGES.home, component: Home },
    { path: PAGES.registerCustomer, component: RegisterCustomer, layout: 'layout' },
    { path: PAGES.registerSell, component: RegisterSell, layout: 'layout' },
    { path: PAGES.profile, component: Profile },
    { path: PAGES.detailProduct, component: DetailProduct },

] ;
// const privateRoutes = [];

export { PAGES, publicRouter };
