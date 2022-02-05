const INITIAL_STATE = {
    products: null,
    isLoading: false,
    errorMsg: null,
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCT_BY_SUBCATEGORY":
            return { ...state, products: [...action.payload] }
        case "GET_PRODUCT_IS_LOADING_TRUE":
            return { ...state, isLoading: true }
        case "GET_PRODUCT_IS_LOADING_FALSE":
            return { ...state, isLoading: false }
        case "GET_PRODUCT_IS_ERROR":
            return { ...state, errorMsg: action.payload }
        default:
            return state;
    }
}
export default productsReducer;