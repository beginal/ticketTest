import React from 'react';
import styled from 'styled-components';
import { IMDB_URL } from 'utils';
import { movieType } from 'types';
import { BsFillPlayFill } from 'react-icons/bs';
import { DEFAULT_PLACEHOLDER_IMAGE } from 'utils';

interface Props {
	movie: movieType;
}

const Movie = ({ movie }: Props) => {
	const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

	return (
		<Container>
			<div onClick={() => window.open(`${IMDB_URL}title/${movie.imdbID}`, '_blank')}>
				<img alt={`The movie titled: ${movie.Title}`} src={poster} />
			</div>
			<span>
				<p>{movie.Year}</p>
				<p>{movie.Type}</p>
			</span>
			<h2>
				<a href={`${IMDB_URL}title/${movie.imdbID}`} target="_blank">
					{movie.Title}
				</a>
			</h2>
			<span>
				<BsFillPlayFill className="icon" />
				<span>Trailer</span>
			</span>
		</Container>
	);
};

export default Movie;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 15px;
	flex-grow: 1;
	flex-shrink: 1;
	max-width: 20%;
	text-align: left;
	background: #1a1a1a;
	color: #ddd;
	border-radius: 5px;
	padding-bottom: 1.5rem;
	> div {
		flex: 1;
		cursor: pointer;
		margin-bottom: 0.5rem;
		&:hover {
			opacity: 0.8;
		}
	}
	> span:first-of-type {
		display: flex;
		justify-content: space-between;
		color: #b3b3b3;
		letter-spacing: 0.09rem;
		padding: 0 0.5rem;
		margin-bottom: 8px;
		> p {
			font-size: 14px;
		}
	}
	> h2 {
		padding: 0 0.5rem;
		font-size: 16px;
		letter-spacing: 0.03rem;
		line-height: 1.3;
		font-weight: 400;
		min-height: 2.5rem;
		&:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}
	> span:last-of-type {
		.icon {
			font-size: 1.3rem;
			margin-right: 3px;
			vertical-align: middle;
		}
		display: flex;
		align-items: center;
		cursor: pointer;
		color: #b3b3b3;
		line-height: 1;
		font-weight: 500;
		font-size: 0.9rem;
		padding: 0 0.5rem;
	}

	@media ${({ theme }) => theme.desktopS} {
		max-width: 30%;
	}
	@media ${({ theme }) => theme.tabletM} {
		max-width: 45%;
	}
	@media ${({ theme }) => theme.tabletS} {
		max-width: 80%;
	}
`;
