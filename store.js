import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import albumReducer from './slices/albumSlice';
export default configureStore({
  reducer: {
    user: loginReducer,
    albums: albumReducer
  },
});
