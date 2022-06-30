import logo from './Icons/annalise.svg';
import { useState } from 'react';
import { Header, Container, Footer, Wrapper } from './App.styled';
import Loader from './Components/Loader/Loader';
import ImageGrid from './Patterns/ImageGrid/ImageGrid';

const App = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const axios = require('axios').default;
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [name, setName] = useState('');
    const [nameSubmitted, setNameSumbmitted] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const errorMessageText = {
        noresults: 'There are no new results to display.',
        request: 'The search has failed.',
        noname: 'Please enter a name.'
    };

    const onSubmitName = () => {
        if(name) {
            setNameSumbmitted(true);
            setErrorMessage('');
        } else {
            setErrorMessage(errorMessageText.noname);
        }
    };

    const onSubmitSearch = () => {
        setLoading(true);

        // fetching data
        axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=12&query=${searchValue}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': API_KEY
            }
        })
            .then(function (response) {
                const data = response.data;
                if(response.data.total) {
                    const filteredData = data.results.map(item => {
                        return {
                            id: item.id,
                            url: item.urls.small,
                            alt_description: item.alt_description
                        };});
                    setResults(filteredData);
                    setErrorMessage('');
                } else {
                    setErrorMessage(errorMessageText.noresults);
                }
                setLoading(false);

            })
            .catch(function (error) {
                setLoading(false);
                error.request.status = '404' && setErrorMessage(errorMessageText.request);
            });
    };

    return (
        <Wrapper>
            <Header>
                <img src={ logo } className='App-logo' alt='logo' />
            </Header>
            <Container>
                <h1>Interview</h1>
                {!nameSubmitted ?
                    <>
                        <label htmlFor='name'>Enter your name: </label>
                        <input type='text' id='name' onChange={ (e) => setName(e.target.value) } data-testid='name-input'></input>
                        <input type='button' value='Submit' onClick={ onSubmitName }></input>
                    </>
                    :
                    <>
                        <h2>Hello, { name } !</h2>
                        <label htmlFor='search'>Search for an image: </label>
                        <input type='text' id='search' value={ searchValue } onChange={ (e) => setSearchValue(e.target.value) } data-testid='search-input'></input>
                        <input type='button' value='Search' onClick={ onSubmitSearch }></input>
                        <ImageGrid list={ results }/>
                    </>
                }
                {errorMessage && <p>{ errorMessage }</p>}
            </Container>
            <Loader isActive={ isLoading } />
            <Footer>
                <h3>Maxime Godrie - Test 2022</h3>
            </Footer>
        </Wrapper>
    );
};

export default App;