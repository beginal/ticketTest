import { createAction, createReducer } from '@reduxjs/toolkit';
import { movieType } from 'types';

type moviesType = {
	loading: boolean;
	movies: movieType;
	errorMessage: null | string;
};

const initialState = {
	loading: true,
	movies: [],
	errorMessage: null,
};

export const searchMovieRequest = createAction('SEARCH_MOVIE_REQUEST');
export const searchMovieSuccess = createAction<moviesType>('SEARCH_MOVIE_SUCCESS');
export const searchMovieFailure = createAction<moviesType>('SEARCH_MOVIE_FAILURE');

const movieReducer = createReducer(initialState, {
	[searchMovieRequest.type]: (state) => {
		state.loading = true;
		state.errorMessage = null;
	},
	[searchMovieSuccess.type]: (state, action) => {
		state.loading = false;
		state.movies = action.payload;
	},
	[searchMovieFailure.type]: (state, action) => {
		state.loading = false;
		state.errorMessage = action.payload;
	},
});

export const actionCreator = {
	searchMovieRequest,
	searchMovieSuccess,
	searchMovieFailure,
};

export default movieReducer;
