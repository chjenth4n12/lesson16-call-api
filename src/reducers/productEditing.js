import * as types from './../constants/ActionType';

var initialState = {};

const productEditing = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCT_EDITING:
            return action.product;
        default:
            return state;
    }
}

export default productEditing;