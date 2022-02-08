import * as api from '../services/products';

// Action Creators
export const getProductBySubCategoryAction = (subCategory) => async (dispatch) => {
    try {
        dispatch({ type: "GET_PRODUCT_IS_LOADING_TRUE" });

        const res = await api.getProductBySubCatagory(subCategory);
        dispatch({ type: "GET_PRODUCT_BY_SUBCATEGORY", payload: res.data.data });
        dispatch({ type: "GET_PRODUCT_IS_LOADING_FALSE" });
    } catch (error) {
        dispatch({ type: "GET_PRODUCT_IS_ERROR", payload: error.message });
        dispatch({ type: "GET_PRODUCT_IS_LOADING_FALSE" });

    }
}