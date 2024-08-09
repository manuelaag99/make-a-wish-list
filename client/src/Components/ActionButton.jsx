export default function ActionButton ({ additionalClassNames, isButtonDisabled, onClickButtonFunction, textForActionButton }) {
    return (
        <button onClick={onClickButtonFunction} disabled={isButtonDisabled} className={'flex justify-center w-full h-18 py-3 cursor-pointer rounded-md shadow-2xl ' + additionalClassNames}>
            <p className='text-center text-white concert-font overflow-hidden'>
                {textForActionButton}
            </p>
        </button>
    )
}