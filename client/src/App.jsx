import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import LargeCard from './Components/LargeCard';
import SmallCard from './Components/SmallCard';
import AddButtonSection from './Components/AddButtonSection';
import AddContentModal from './Components/Modals/AddContentModal';
import { useState } from 'react';
import ListWindowModal from './Components/Modals/ListWindowModal';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				users: {
					merge(existing, incoming) {
						return incoming;
					}
				},
				lists: {
					merge(existing, incoming) {
						return incoming;
					}
				}
			}
		}
	}
});

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: cache
})

export default function App () {
	const [isAddContentModalVisible, setIsAddContentModalVisible] = useState(false);
	const [isListWindowModalVisible, setIsListWindowModalVisible] = useState(false);
	const [idOfList, setIdOfList] = useState(null);

	function openListWindow (listId) {
		setIdOfList(listId);
		setIsListWindowModalVisible(true);
	} 
	
	return (
		<ApolloProvider client={client}>
			<div className='flex sm:h-screen h-full w-full justify-center items-start bg-var-1 inter-font py-32'>
				<div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 '></div>
				<div className='flex flex-col sm:flex-row justify-between items-start w-9/10 sm:w-6/10 sm:p-10'>
					<SmallCard userId="6660935f2e128966078f032c" />
					<div className='flex flex-col w-full sm:w-6/10 justify-center mt-5 sm:mt-0'>
						<LargeCard sendIdOfList={(listId) => openListWindow(listId)} />
						<AddButtonSection additionalClassNames=" mt-8 " onClickAction={() => setIsAddContentModalVisible(true)} hasDisplayMenu={true} />
					</div>
				</div>
			</div>
			{isAddContentModalVisible && <AddContentModal onClose={() => setIsAddContentModalVisible(false)} />}
			{isListWindowModalVisible && idOfList && <ListWindowModal listId={idOfList} onClose={() => setIsListWindowModalVisible(false)} />}
		</ApolloProvider>
	)
}