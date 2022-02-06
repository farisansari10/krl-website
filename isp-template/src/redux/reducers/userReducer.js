const INITIAL_STATE = {
    userData: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "STORE_USER_DATA":
            return { ...state, userData: { ...action.payload } }
        default:
            return state;
    }
}
export default userReducer;