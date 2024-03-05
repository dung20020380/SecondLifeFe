import Home from '../pages/home/Home';
import RegisterCustomer from '../pages/registerCustomer/RegisterCustomer';
import RegisterSell from '../pages/registerSell/RegisterSell';
import Profile from '../pages/profile/Profile';
import DetailProduct from '../pages/detailProduct/DetailProduct';
import {Cart} from "../pages/cart";
import ListProductComponent from '../pages/listProduct';
import SellProduct from '../pages/Sell';

const PAGES = {
    home: '/' ,
    profile: '/profile',
    detailProduct: '/detail-product',
    cart:'/cart',
    listProduct: '/list-product',
    sellProduct: '/upload-product'
};

const publicRouter = [
    { path: PAGES.home, component: Home },
    { path: PAGES.profile, component: Profile },
    { path: PAGES.detailProduct, component: DetailProduct },
    { path: PAGES.cart, component: Cart },
    { path: PAGES.listProduct, component: ListProductComponent },
    { path: PAGES.sellProduct, component: SellProduct },
] ;
// const privateRoutes = [];

export { PAGES, publicRouter };
