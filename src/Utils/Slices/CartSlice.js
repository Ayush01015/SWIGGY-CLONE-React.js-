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
        clearCart: (state) =>{
            state.items = [];
        },
        removeItem: (state,action) => {
            state.items.splice(action.payload, 1);
            // console.log("mmm",action.payload)
        }, 
    }
    }
)  

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;