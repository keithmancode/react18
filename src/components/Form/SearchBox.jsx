import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useSearchCriteria} from "../../contexts/SearchCriteriaContext";

const initialState = ''

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: .5rem;
`

const Form = styled.form`
	display: flex;
	flex: wrap;
	justify-content: space-between;
	gap: 1rem;
`

const InputBox = styled.input`
	background-color: transparent;
	border: 0 none;
	border-bottom: 2px solid #fff;
	color: #fff;
	padding: .3rem;
	
	flex: 1;
	
	&::placeholder {
	color: #fff;
	}
`

const Button = styled.button`
	background-color: transparent;
	border: 2px solid #fff;
	color: #fff;
	font-weight: bold;
	padding: .3rem .75rem;
`

const YourInputted = styled.div`
	& > code {
		font-size: 0.8rem;
		font-style: italic;
	}
`

const YourSubmitted = styled.div`
	& > code {
		font-size: 0.8rem;
		font-style: italic;
	}
`

const MyComponent = () => {

	const {keyword: {
		keyword
	}, keywordDispatch} = useSearchCriteria();
	const [value, setValue] = useState(initialState)

	const handleKeywordChange = (e) => {
		const value = e.target.value;
		console.log(`#1 Your input: ${value}`)
		setValue(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(`#3 Your submit: ${value}`)
		keywordDispatch({
			type: 'find',
			data: value,
		})
	}

	const handleReset = (e) => {
		setValue(initialState)
		keywordDispatch({
			type: 'reset',
		})

	}

	useEffect(() => {
		return () => {
			console.log(`#2 Your input: ${value}`)
		};
	}, [value]);

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<InputBox type={`text`} name={`value`} placeholder={`Keyword`} onChange={handleKeywordChange}></InputBox>
				<Button type={`submit`}>Find</Button>
				<Button type={`reset`} onClick={handleReset}>Reset</Button>
			</Form>
			<YourInputted>Input: <code>{value || '###'}</code></YourInputted>
			<YourSubmitted>Submit: <code>{keyword || '###'}</code></YourSubmitted>
		</Container>
	);
};

export default MyComponent;
