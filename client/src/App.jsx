import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import LargeCard from './Components/LargeCard';
import SmallCard from './Components/SmallCard';
import AddButtonSection from './Components/AddButtonSection';
import AddContentModal from './Components/Modals/AddContentModal';
import { useState } from 'react';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: new InMemoryCache
})





export default function App () {
	const [isAddContentModalVisible, setIsAddContentModalVisible] = useState(true);

	return (
		<ApolloProvider client={client}>
			<div className='flex sm:h-screen h-full justify-center items-start bg-var-1 inter-font py-32'>
				<div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 '></div>
				<div className='flex flex-col sm:flex-row justify-between items-start w-9/10 sm:w-6/10 sm:p-10'>
					<SmallCard />
					<div className='flex flex-col w-full sm:w-6/10 justify-center mt-5 sm:mt-0'>
						<LargeCard />
						<AddButtonSection additionalClassNames=" mt-8 " onClickAction={() => setIsAddContentModalVisible(true)} hasDisplayMenu={true} />
					</div>
				</div>
			</div>
			{isAddContentModalVisible && <AddContentModal />}
		</ApolloProvider>
	)
}