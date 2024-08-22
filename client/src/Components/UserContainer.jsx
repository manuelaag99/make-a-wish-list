export default function UserContainer ({ user, onClose }) {
    if (user) return (
        <div className="flex flex-row items-center w-full bg-white shadow-2xl rounded-md p-2 sm:p-4">
            <div className="flex justify-center items-center h-fit w-2/10 sm:w-1/10 max-w-12 sm:max-w-18">
                <img src="https://via.placeholder.com/150" alt="placeholder" className=" rounded-full object-cover" />
            </div>
            <div className="flex w-8/10 sm:w-9/10">
                <div className="flex flex-col w-full justify-center ml-2 sm:ml-4 text-mobileText sm:text-smAndUpText overflow-hidden">
                    <p className="my-1 font-bold whitespace-nowrap">Nombre de la persona</p>
                    <p className="hidden sm:block my-1 ">Descripción de la persona</p>
                </div>
            </div>
        </div>
    )
}