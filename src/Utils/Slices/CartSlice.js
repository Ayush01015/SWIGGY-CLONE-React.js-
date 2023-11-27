import { createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            /*  we are mutating the state over here (directly updating it)  */
            state.items.push(action.payload); 
        },
        removeItem:(state,action)=>{
            state.items.splice(action.payload,1); 
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
