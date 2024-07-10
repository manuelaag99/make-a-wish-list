import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				users: {
					keyArgs: false,
					merge(existing = [], incoming = []) {
						return [...existing, ...incoming];
					}
				},
				lists: {
					keyArgs: false,
					merge(existing = [], incoming = []) {
						return [...existing, ...incoming];
					}
				},
				listItems: {
					keyArgs: false,
					merge(existing = [], incoming = []) {
						return [...existing, ...incoming];
					}
				},
				posts: {
					keyArgs: false,
					merge(existing = [], incoming = []) {
						return [...existing, ...incoming];
					}
				}
			}
		}
	}
});

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache	
})

export default function App () {
	
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/error' element={<ErrorPage />} />
				</Routes>
			</Router>
		</ApolloProvider>
	)
}