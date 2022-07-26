import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import HelloCard from "./components/HelloCard/HelloCard";

const SearchBox = React.lazy(() => import('./components/Form/SearchBox'))

function App() {
    return (
        <Wrapper>
            <HelloCard username={"Joe"}></HelloCard>
            <SearchBox></SearchBox>
        </Wrapper>
    );
}

export default App;
