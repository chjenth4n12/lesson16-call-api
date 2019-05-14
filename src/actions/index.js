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

export const addProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(addProduct(res.data));
        })
    }
}

export const addProduct = (product) => {
    return {
        type : types.ADD_PRODUCT,
        product
    }
}

export const getProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(getProduct(res.data));
        });
    }
}

export const getProduct = (product) => {
    return {
        type : types.PRODUCT_EDITING,
        product
    }
}

export const editProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(editProduct(res.data));
        });
    }
}

export const editProduct = (product) => {
    return {
        type : types.UPDATE_PRODUCT,
        product
    }
}