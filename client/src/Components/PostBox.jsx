export default function PostBox ({ postBody, userDisplayName }) {
    return (
        <div className="flex flex-col w-full p-5 bg-white hover:bg-gray-300 cursor-pointer duration-200">
			<div className="flex w-full py-0.5">
				<p className="text-black font-bold">
					{userDisplayName}
				</p>
			</div>
			<div className="flex w-full py-0.5">
				<p>
					{postBody}
				</p>
			</div>
		</div>
    )
}