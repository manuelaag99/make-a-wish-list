import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
	query getUsers {
		user (id: "6660935f2e128966078f032c") {
			displayName
			email
		}
	}
`

export default function SmallCard ({}) {
	const { loading, error, data } = useQuery(GET_USER);
	
	if (loading) return <p>Loading...</p>
	
	if (error) return <p>Error</p>

    console.log(data)
	if (!loading && !error) console.log(data) 
    
    if (!error && !loading && data) return (
        <div className='flex flex-col w-full sm:w-35 justify-center items-start bg-white h-fit p-10 shadow-2xl rounded-md'>
            <div className="flex w-full aspect-square">
                <img className="w-full" src="" alt="" />
            </div>
            <div className="flex flex-col w-full my-4">
                <div className="flex w-full">
                    <p className="text-left text-black font-bold overflow-hidden">
                        {data.user.displayName}
                    </p>
                </div>
                <div className="flex w-full">
                    <p className="text-left text-black overflow-hidden">
                        Biografía
                    </p>
                </div>
            </div>
        </div>
    )
}