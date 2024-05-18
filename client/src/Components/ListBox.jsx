export default function ListBox ({ listName, listDescription, listPrivacy }) {
    return (
        <div className="flex flex-row w-full px-7 cursor-pointer bg-white hover:bg-gray-300">
			<div className="flex flex-col w-9/10 py-4">
				<div>
					<p className="text-left text-black font-bold overflow-hidden">
						{listName}
					</p>
				</div>
				<div>
					<p className="text-left text-black overflow-hidden">
						{listDescription}
					</p>
				</div>
				<div>
					<p className="text-left text-gray-500 overflow-hidden">
						{listPrivacy}
					</p>
				</div>
			</div>
			<div className="flex w-1/10"></div>
		</div>
    )
}