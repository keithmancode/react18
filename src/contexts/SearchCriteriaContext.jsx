import React, {createContext, useContext, useReducer} from "react";

const initialState = {
	keyword: '',
}

const reducer = (state, action) => {
	const {type, data} = action
	switch (type) {
		case 'find': {
			console.log('Find: ', data)
			return {
				...state,
				keyword: data,
			}
		}
		case 'reset': {
			console.log('Reset')
			return {
				...initialState,
			}
		}
		default: {
			console.log('No handle: ', data)
			break
		}
	}
}

export const SearchCriteriaContext = createContext({
	keyword: null
})

export const SearchCriteriaProvider = ({children}) => {
	const [keyword, keywordDispatch] = useReducer(reducer, initialState)
	return (
		<SearchCriteriaContext.Provider
			value={{
				keyword,
				keywordDispatch,
			}}
			>
			{children}
		</SearchCriteriaContext.Provider>
	)
}

export const useSearchCriteria = () => useContext(SearchCriteriaContext)
