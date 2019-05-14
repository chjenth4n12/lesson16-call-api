import * as types from './../constants/ActionType';

var initialState = [];

var findIndex = (id, products) => {
    var result = -1;
    products.forEach((product, index) => {
        if (id === product.id) {
            result = index;
        }
    });
    return result;
}

const products = ( state=initialState, action ) => {
    var index = null;
    switch(action.type){
        case types.GET_ALL_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            index = findIndex(action.id, state);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(action.product.id, state);
            if (index !== -1) {
                state[index] = action.product;
            }
            return [...state];
        default: return [...state];
    }
};

export default products;