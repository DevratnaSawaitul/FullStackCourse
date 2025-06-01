// here toolkit is used for inside finctions
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './SlicesForRedux/counterSlice'
import cartReducer from './ProductManagement/cartSlice'
const store = configureStore({
  reducer: {
    // inside this multiple reducer
    // reducer1
    // reducer2

    // not recommended insdeaed create new files and there we'll write things like below
    counter : counterReducer,
    carts: cartReducer  
  }
});
export default store;