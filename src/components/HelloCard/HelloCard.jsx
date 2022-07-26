import React from 'react';
import styled from "styled-components";

const Card = styled.div`
	padding: 1rem 0;
`

const Header = styled.h1`
	font-size: 2rem;
	margin: 0;
	padding: 0;
	
`

const HelloCard = (props) => {
	const {username} = props
	return (
		<Card>
			<Header>Hello, {username}</Header>
		</Card>
	);
};

export default HelloCard;
