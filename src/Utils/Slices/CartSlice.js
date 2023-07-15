import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        
        addItem: (state,action) => {
            /*initial state (state), data coming in (action)*/
            state.items.push(action.payload);

        },
        clearCart: () =>{
            state.items = [];
        },
        removeItem: () => {
            state.items.pop();
        },
    }
    }
)  

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;