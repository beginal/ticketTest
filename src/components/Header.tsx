import React from 'react';
import styled from 'styled-components';
import Search from './Search';

interface Props {
	text: string;
	search: (arr1: string) => void;
}

const Header = ({ text, search }: Props) => {
	return (
		<Container>
			<h2>
				<a href="#">{text}</a>
			</h2>
			<Search search={search} />
		</Container>
	);
};

export default Header;

const Container = styled.header`
	position: fixed;
	background-color: #282c34;
	width: 100%;
	height: 70px;
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	padding: 20px;
	cursor: pointer;
	h2 {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 20px;
		padding: 0 20px;
	}
`;
