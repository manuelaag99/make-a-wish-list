import AddButtonSection from "../AddButtonSection";

export default function PopUpWindowModal ({ typeOfContent }) {
    return (
        <div>
            <div className="fixed top-0 left-o w-full h-full bg-black opacity-35 z-40"></div>
            <div className="flex flex-col justify-center md:w-4/10 w-95 h-fit md:px-14 px-3 bg-white absolute top-[30%] left-[2.5%] md:left-[30%] z-50 rounded-md shadow-2xl">
                <div className="flex justify-center items-center w-full sm:mt-8 mt-5 mb-2 ">
                    {(typeOfContent === 'list') && <p className="text-black text-center">Exitosamente agregaste una lista</p>}
                    {(typeOfContent === 'element') && <p className="text-black text-center">Exitosamente agregaste un elemento</p>}
                    {(typeOfContent === 'post') && <p className="text-black text-center">Exitosamente agregaste una publicación</p>}
                </div>

                <AddButtonSection additionalClassNames=" sm:my-8 my-5 " hasDisplayMenu={false} />
            </div>
        </div>
    )
}