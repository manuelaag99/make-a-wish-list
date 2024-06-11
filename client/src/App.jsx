import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import LargeCard from './Components/LargeCard';
import SmallCard from './Components/SmallCard';
import AddButtonSection from './Components/AddButtonSection';
import AddContentModal from './Components/Modals/AddContentModal';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: new InMemoryCache
})

// const GET_USERS = gql`
// 	query getUsers {
// 		users {
// 			id
// 			username
// 			email
// 		}
// 	}
// `




export default function App () {
	// const { loading, error, data } = useQuery(GET_USERS);
	
	// if (loading) return <p>Loading...</p>
	
	// if (error) return <p>Error</p>

	// if (!loading && !error) console.log(error)

	return (
		<ApolloProvider client={client}>
			<div className='flex h-screen justify-center items-start bg-var-1 inter-font py-32'>
				<div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 '></div>
				<div className='flex flex-col sm:flex-row justify-between items-start w-9/10 sm:w-6/10 p-10'>
					<SmallCard />
					<div className='flex flex-col w-full sm:w-6/10 justify-center mt-5 sm:mt-0'>
						<LargeCard />
						<AddButtonSection />
					</div>
				</div>
			</div>
			<AddContentModal />
		</ApolloProvider>
	)
}