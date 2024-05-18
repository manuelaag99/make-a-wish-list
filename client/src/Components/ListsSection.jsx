import ListBox from "./ListBox";

export default function ListsSection ({}) {
    return (
        <div className="flex flex-col w-full">
			<div className='flex flex-col w-full rounded-none'>
				<div className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer'>
					<p className='text-center font-bold overflow-hidden'>
						+ Agregar lista nueva
						</p>
				</div>
			</div>

			<div className='flex flex-col w-full'>
				<ListBox listDescription="Descripcion de lista" listName="Nombre de lista" listPrivacy="Privacidad de lista" />
			</div>
		</div>
    )
}