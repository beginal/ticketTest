import React, { useState, useEffect } from 'react';
import { OMDB_API_KEY, OMDB_API_URL } from 'utils';
import styled from 'styled-components';
import Header from 'components/Header';
import Movie from 'components/Movie';
import Search from 'components/Search';

const App = () => {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		fetch(`${OMDB_API_URL}man${OMDB_API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.Search);
				setLoading(false);
			});
	}, []);

	const search = (searchValue: any) => {
		setLoading(true);
		setErrorMessage(null);

		fetch(`${OMDB_API_URL}${searchValue}${OMDB_API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.Response === 'True') {
					setMovies(data.Search);
					setLoading(false);
				} else {
					setErrorMessage(data.Error);
					setLoading(false);
				}
			});
	};

	return (
		<Container>
			<Header text="HOOKED" />
			<Search search={search} />
			<p>Sharing a few of our favorite movies</p>
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
	text-align: center;
	p {
		font-size: large;
	}
	> div {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		.errorMessage {
			margin: auto;
			font-weight: bold;
			color: rgb(161, 15, 15);
		}
	}
`;
