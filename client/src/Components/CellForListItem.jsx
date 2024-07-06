export default function CellForListItem ({ listItem }) {
    return (
        <div className="flex flex-row w-full p-6 hover:bg-gray-300 cursor-pointer duration-200 max-h-64">
            <div className="flex flex-col justify-center w-7/10">
                <p className="font-bold text-left w-full whitespace-nowrap overflow-hidden">
                    {listItem.itemName}
                </p>
                <p className="font-regular text-left w-full whitespace-nowrap overflow-hidden">
                    {listItem.itemDescription}
                </p>
            </div>
            <div className="flex w-3/10">
                <img className="object-contain w-full h-full" src={listItem.itemPhotoUrl} />
            </div>
        </div>
    )
}