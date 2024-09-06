import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import FeedPage from './pages/FeedPage';
import { SearchProvider } from './Context/SearchQueryContext';
import SearchResultsPage from './pages/SearchResultsPage';
import { AuthContext } from './Context/AuthContext';
import { useCallback, useEffect, useState } from 'react';

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache	
})

let logOutTimer;
export default function App () {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState(null);
	const [tokenExpiration, setTokenExpiration] = useState(null);
	
	const logIn = useCallback((uId, token, expirationDate) => {
		setUserId(uId);
		setToken((token));
		const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpiration(tokenExpirationDate);
		localStorage.setItem("userData", JSON.stringify({ userId: uId, token: token, expiration: tokenExpirationDate.toISOString() }));
	}, []);

	const logOut = useCallback(() => {
		setToken(null);
		setTokenExpiration(null);
		setUserId(null);
		localStorage.removeItem("userData");
	}, []);

	useEffect(() => {
		if (token && tokenExpiration) {
			const remainingTime = tokenExpiration.getTime() - new Date().getTime();
			logOutTimer = setTimeout(logOut, remainingTime);
		} else {
			clearTimeout(logOutTimer);
		}
	}, [token, logOut, tokenExpiration]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (storedData && storedData.token && (new Date(storedData.expiration) > new Date())) {
			logIn(storedData.userId, storedData.token, new Date(storedData.expiration));
		}
	}, [logIn]);
	
	if (!token) {
		return (
			<ApolloProvider client={client} >
				<AuthContext.Provider value={{ isLoggedIn: token, token: token, userId: userId, login: logIn, logout: logOut }} >
					<SearchProvider>
						<Router>
							<Routes>
								<Route path='/*' element={<SignInSignUpPage />} />
								<Route path='/error' element={<ErrorPage />} />
								<Route path='/searchresults' element={<SearchResultsPage />} />
							</Routes>
						</Router>
					</SearchProvider>
				</AuthContext.Provider>
			</ApolloProvider>
		)
	} else {
		return (
			<ApolloProvider client={client} >
				<AuthContext.Provider value={{ isLoggedIn: token, token: token, userId: userId, login: logIn, logout: logOut }} >
					<SearchProvider>
						<Router>
							<Routes>
								<Route path='/' element={<FeedPage />} />
								<Route path='feed' element={<FeedPage />} />
								<Route path='/profile' element={<ProfilePage />} />
								<Route path='/error' element={<ErrorPage />} />
								<Route path='/searchresults' element={<SearchResultsPage />} />
							</Routes>
						</Router>
					</SearchProvider>
				</AuthContext.Provider>
			</ApolloProvider>
		)
	}
}