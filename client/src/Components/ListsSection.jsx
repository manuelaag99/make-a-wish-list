import { gql, useQuery } from "@apollo/client";
import ListBox from "./ListBox";

const GET_USER_LISTS = gql`
	query getUserLists {
		listsByCreator (creatorId: "6660935f2e128966078f032c") {
			id
			listName
			listDescription
		}
	}
`

export default function ListsSection ({}) {
	const { loading, error, data } = useQuery(GET_USER_LISTS);

	if (error) return <p>Error</p>

	if (!error && !data && loading) return <p>Loading...</p>
	
    if (!error && !loading && data && data.listsByCreator.length) {
		return (
			<div className="flex flex-col w-full">
				<div className='flex flex-col w-full rounded-none'>
					<div className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer'>
						<p className='text-center font-bold overflow-hidden'>
							+ Agregar lista nueva
						</p>
					</div>
				</div>
	
				{data && (data.listsByCreator) && (data.listsByCreator.length > 0) && data.listsByCreator.map((list) => {
					return <ListBox key={list.id} listName={list.listName} listDescription={list.listDescription} listPrivacy="Privacidad de lista" />
				})}
			</div>
		)
	}
}