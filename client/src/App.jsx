import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';

const cache = new InMemoryCache({
	typePolicies: {
		User: {
			keyFields: ['id']
		},
		List: {
			keyFields: ['id']
		},
		ListItem: {
			keyFields: ['id']
		},
		Post: {
			keyFields: ['id']
		}
	},
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