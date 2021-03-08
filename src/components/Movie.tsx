import React from 'react';
import styled from 'styled-components';
import { DEFAULT_PLACEHOLDER_IMAGE } from 'utils';

interface Props {
	movie: any;
}

const Movie = ({ movie }: Props) => {
	const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
	return (
		<Container>
			<h2>{movie.Title}</h2>
			<div>
				<img alt={`The movie titled: ${movie.Title}`} src={poster} />
			</div>
			<p>({movie.Year})</p>
		</Container>
	);
};

export default Movie;

const Container = styled.div`
	padding: 5px 25px 10px 25px;
	max-width: 25%;

	@media ${({ theme }) => theme.desktopS} {
		max-width: 33%;
	}
	@media ${({ theme }) => theme.tabletM} {
		max-width: 50%;
	}
	@media ${({ theme }) => theme.tabletS} {
		max-width: 100%;
		margin: auto;
	}
`;
