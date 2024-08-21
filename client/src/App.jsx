import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import FeedPage from './pages/FeedPage';
import { SearchProvider } from './Context/SearchQueryContext';
import SearchResultsPage from './pages/SearchResultsPage';

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache	
})

export default function App () {
	
	return (
		<ApolloProvider client={client} >
			<SearchProvider>
				<Router>
					<Routes>
						<Route path='/' element={<SignInSignUpPage />} />
						<Route path='feed' element={<FeedPage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/error' element={<ErrorPage />} />
						<Route path='/searchresults' element={<SearchResultsPage />} />
					</Routes>
				</Router>
			</SearchProvider>
		</ApolloProvider>
	)
}