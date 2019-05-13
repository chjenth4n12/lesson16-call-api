import React from 'react';
import Home from './pages/HomePage/Home';
import NotFound from './pages/NotFoundPage/NotFound';
import Products from './pages/ProductListPage/Products';
import ProductAction from './pages/ProductActionPage/ProductAction';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/product',
        exact : true,
        main : () => <Products />
    },
    {
        path : '/product/add',
        exact : true,
        main : ({ history }) => <ProductAction history={ history }/>
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({ match }) => <ProductAction match={match} />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
]

export default routes;