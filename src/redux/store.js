import { configureStore } from '@reduxjs/toolkit';
import { cowsSlice } from './cowsSlice';

export default configureStore({
	reducer: {
        cows : cowsSlice.reducer
     },
});