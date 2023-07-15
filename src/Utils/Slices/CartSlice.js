import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:["banana","apples"],
    },
    reducers:{
        addItem: (state,action) => {
            /*initial state (state), data coming in (payload)*/
            state.items.push(action.payload);

        },
        clearCart: () =>{
            state.items = [];
        },
        removeItem: () => {
            state.items.pop();
        },
    }
})  