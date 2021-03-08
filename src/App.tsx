import React, { useEffect } from 'react';
import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
	searchMovieSuccess,
	searchMovieRequest,
	searchMovieFailure,
} from 'redux/reducer/movieReducer';
import { OMDB_API_KEY, OMDB_API_URL } from 'utils';
import styled from 'styled-components';
import Header from 'components/Header';
import Movie from 'components/Movie';

const App = () => {
	const dispatch = useDispatch();
	const { loading, movies, errorMessage } = useSelector((state: RootState) => state.movieReducer);

	useEffect(() => {
		fetch(`${OMDB_API_URL}man${OMDB_API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				dispatch(searchMovieSuccess(data.Search));
			});
	}, []);

	const search = (searchValue: string) => {
		dispatch(searchMovieRequest());

		fetch(`${OMDB_API_URL}${searchValue}${OMDB_API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.Response === 'True') {
					dispatch(searchMovieSuccess(data.Search));
				} else {
					dispatch(searchMovieFailure(data.Error));
				}
			});
	};

	return (
		<Container>
			<Header search={search} text="HAM JUN HO" />
			<div>
				{loading && !errorMessage ? (
					<span>loading...</span>
				) : errorMessage ? (
					<div className="errorMessage">{errorMessage}</div>
				) : (
					movies.map((movie, i) => <Movie key={`${i} - ${movie}`} movie={movie} />)
				)}
			</div>
		</Container>
	);
};

export default App;

const Container = styled.div`
	background: black;
	text-align: center;
	min-height: 100vh;
	> div {
		display: flex;
		flex-wrap: wrap;
		padding: 75px 0;
		flex-direction: row;
		justify-content: center;
		.errorMessage {
			margin: auto;
			font-weight: bold;
			color: rgb(161, 15, 15);
		}
	}
`;
