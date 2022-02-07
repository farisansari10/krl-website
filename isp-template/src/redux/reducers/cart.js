const INITIAL_STATE = {
    items: [],
    totalCount: 0,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_ITEM_IN_CART":
            let newItem = null;
            const indexOfExistingItem = state.items.findIndex(element => element.name === action.payload.name)
            if (indexOfExistingItem === -1) {
                newItem = { ...action.payload, count: 1 };
                let newestSubtotalCount = state.totalCount + 1;
                return { ...state, items: [...state.items, { ...newItem }], totalCount: newestSubtotalCount }
            } else {
                newItem = state.items.map(element => {
                    if (element.name === action.payload.name) {
                        element.count += 1;
                        newTotalCount += 1;
                    }
                    return element;
                });
            }
            let newTotalCount = newItem.reduce((acc, element) => {
                return acc = acc + element.count
            }, 0);
            return { ...state, items: [...newItem], totalCount: newTotalCount }
        case "INCREASE_ITEM":
            let newIncreaseItem = state.element.map(element => {
                if (element.name === action.payload.name) {
                    element.count += 1;
                }
                return element;
            });
            return { ...state, items: [...newIncreaseItem], totalCount: state.totalCount += 1 }
        case "DECREASE_ITEM":
            let tempArr = [...state.items];
            tempArr = tempArr.map(ele => {
                if (ele.name === action.payload.name) {
                    ele.count -= 1;
                }
                return ele;
            });
            tempArr = tempArr.filter(el => el.count !== 0);
            let newTotalCountDec = tempArr.reduce((acc, ele) => {
                return acc += ele.count;
            }, 0)
            return { ...state, items: [...tempArr], totalCount: newTotalCountDec }
        case "REMOVE_ITEM":
            const newCart = state.items.filter(item => item._id !== action.payload);
            return { ...state, items: [...newCart] }
        case "RESET_CART":
            return { ...state, items: [], totalCount: 0 }
        default:
            return state;
    }
}
export default cartReducer;