import Home from '../pages/home/Home';
import RegisterCustomer from '../pages/registerCustomer/RegisterCustomer';
import RegisterSell from '../pages/registerSell/RegisterSell';
import Profile from '../pages/profile/Profile';
import DetailProduct from '../pages/detailProduct/DetailProduct';
import {Cart} from "../pages/cart";


const PAGES = {
    home: '/' ,
    registerCustomer: '/register-customer',
    registerSell: '/register-sell',
    profile: '/profile',
    detailProduct: '/detail-product',
    cart:'/cart'

};

const publicRouter = [
    { path: PAGES.home, component: Home },
    { path: PAGES.registerCustomer, component: RegisterCustomer, layout: 'layout' },
    { path: PAGES.registerSell, component: RegisterSell, layout: 'layout' },
    { path: PAGES.profile, component: Profile },
    { path: PAGES.detailProduct, component: DetailProduct },
    { path: PAGES.cart, component: Cart },


] ;
// const privateRoutes = [];

export { PAGES, publicRouter };
