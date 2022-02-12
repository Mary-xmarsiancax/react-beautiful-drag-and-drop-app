const SET_ITEMS = "SET_ITEMS";
export const setItems = (startIndex, endIndex) => ({type: SET_ITEMS, startIndex, endIndex})
const initialState = {
    items: [
        {
            id: 1,
            content: "item 1"
        },
        {
            id: 2,
            content: "item 2"
        },
        {
            id: 3,
            content: "item 3"
        },
        {
            id: 4,
            content: "item 4"
        },
        {
            id: 5,
            content: "item 5"
        },
        {
            id: 6,
            content: "item 6"
        },
    ]
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS: {
            let copyState = {...state}
            let itemsCopy = [...state.items]
            const removed = itemsCopy.splice(action.startIndex, 1)
            let result = itemsCopy
            result.splice(action.endIndex, 0, ...removed)
            copyState.items = result
            return copyState;
        }
        default:
            return state;
    }
}
export default itemsReducer;