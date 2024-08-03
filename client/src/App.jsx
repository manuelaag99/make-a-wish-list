import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import SignInSignUpPage from './pages/SignInSignUpPage';

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache	
})

export default function App () {
	
	return (
		<ApolloProvider client={client} >
			<Router>
				<Routes>
					<Route path='/' element={<SignInSignUpPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/error' element={<ErrorPage />} />
				</Routes>
			</Router>
		</ApolloProvider>
	)
}