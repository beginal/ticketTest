import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	temp: [],
};

type tempType = {
	temp: string[];
};

export const temp = createAction<tempType>('TEMP');

const movieReducer = createReducer(initialState, {
	[temp.type]: (state, { payload }) => {
		state.temp = payload;
	},
});

export const actionCreator = {
	temp,
};

export default movieReducer;
