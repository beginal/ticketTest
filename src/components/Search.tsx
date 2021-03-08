import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
interface Props {
	search: (arr1: string) => void;
}

const Search = ({ search }: Props) => {
	const [searchValue, setSearchValue] = useState<string>('');

	const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const resetInputField = () => {
		setSearchValue('');
	};

	const callSearchFunction = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		search(searchValue);
		resetInputField();
	};
	return (
		<Container>
			<div>
				<input
					type="text"
					value={searchValue}
					placeholder="Search IMDb"
					onChange={handleSearchInputChanges}
				/>
				<button onClick={callSearchFunction} type="submit">
					<FiSearch />
				</button>
			</div>
		</Container>
	);
};

export default Search;

const Container = styled.form`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	div {
		display: flex;
		background-color: white;
		border: 2px solid white;
		border-radius: 5px;
		input {
			min-width: 350px;
			outline: none;
			border: none;
			padding: 8px 10px;
			border-radius: 5px;
			font-size: 0.88rem;
			font-weight: 500;
			flex: 1;
		}
		button {
			display: flex;
			align-items: center;
			font-size: 1.3rem;
			outline: none;
			border: none;
			background-color: transparent;
			color: black;
			cursor: pointer;
		}
	}
`;
