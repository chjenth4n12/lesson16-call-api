import * as types from './../constants/ActionType';
import callApi from '../utils/apiCaller';

export const getAllProductsRequest = () => {
    return (dispatch) => {
        return callApi ('products', 'GET', null).then(res => {
            dispatch(getAllProducts(res.data));
        });
    };
}

export const getAllProducts = (products) => {
    return {
        type : types.GET_ALL_PRODUCTS,
        products
    };
}

export const deleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then( res => {
            dispatch(deleteProduct(id));
        });
    }
}

export const deleteProduct = (id) => {
    return {
        type : types.DELETE_PRODUCT,
        id
    }
}