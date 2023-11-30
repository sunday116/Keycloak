import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../components/leftNavigation/leftNavigationSlice';

export const store = configureStore({
    reducer: {
        headerTitle: headerReducer
    },
})