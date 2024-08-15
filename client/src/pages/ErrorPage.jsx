import TopBar from "../Components/TopBar";

export default function ErrorPage () {
    return (
        <div className='flex md:h-screen h-full w-full justify-center items-start bg-var-1 inter-font pt-24 pb-36'>
		    <TopBar />
			<div className='flex flex-col md:flex-row justify-between items-start w-9/10 md:w-6/10 md:p-10'>
				<div className='flex h-screen w-full justify-center items-start bg-var-1 inter-font px-4'>
                    <p className='text-xl text-[#709A9C] font-bold text-center mt-6'>
                        Lo sentimos, esta página no existe.
                    </p>
                </div>
				</div>
		</div>
    )
}