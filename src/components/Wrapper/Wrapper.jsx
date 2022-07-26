import React from 'react';
import styled from "styled-components";

const Container = styled.div`
	background-color: #6667ab;
	color: #fff;
	
	display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

const SafeArea = styled.div`
	padding: 0 16px;
`

const Wrapper = (props) => {
	return (
		<Container>
			<SafeArea>
				{props.children}
			</SafeArea>
		</Container>
	);
};

export default Wrapper;
