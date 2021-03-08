import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
	search: any;
}

const Search = ({ search }: Props) => {
	const [searchValue, setSearchValue] = useState('');

	const handleSearchInputChanges = (e: any) => {
		setSearchValue(e.target.value);
	};

	const resetInputField = () => {
		setSearchValue('');
	};

	const callSearchFunction = (e: any) => {
		e.preventDefault();
		search(searchValue);
		resetInputField();
	};
	return (
		<Container>
			<input type="text" value={searchValue} onChange={handleSearchInputChanges} />
			<input onClick={callSearchFunction} type="submit" value="SEARCH" />
		</Container>
	);
};

export default Search;

const Container = styled.form`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 10px;
	input[type='text'] {
		width: 40%;
		min-width: 170px;
	}
	input[type='submit'] {
		padding: 5px;
		background-color: transparent;
		color: black;
		border: 1px solid black;
		width: 80px;
		margin-left: 5px;
		cursor: pointer;
		&:hover {
			background-color: #282c34;
			color: antiquewhite;
		}
	}
`;
