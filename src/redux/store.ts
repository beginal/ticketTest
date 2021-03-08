import { configureStore, combineReducers } from '@reduxjs/toolkit';
import movieReducer from './reducer/movieReducer';

const rootReducer = combineReducers({
	movieReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
