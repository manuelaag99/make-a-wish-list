import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';

const cache = new InMemoryCache({});

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: new InMemoryCache()	
})

export default function App () {
	
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path='/profile' element={<ProfilePage />} />
				</Routes>
			</Router>
		</ApolloProvider>
	)
}