import {createSlice} from "@reduxjs/toolkit";

const initialState={
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
   name:'cart',
   initialState,
   reducers :{
      addToCard(state, action){
           const newItem =action.payload;
           const ItemIndex = state.products.find((Item) => Item.id === newItem.id)
           if(ItemIndex){
            ItemIndex.Quantity++;
            ItemIndex.totalPrice +=newItem.Price
           }else{
            state.products.push({
                id:newItem.id,
                name:newItem.name,
                Price: newItem.Price,
                Quantity: 1,
                totalPrice: newItem.price,
                image: newItem.image
            })
           }
           state.totalPrice += newItem.price;
           state.totalQuantity++;
      }
   },
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer