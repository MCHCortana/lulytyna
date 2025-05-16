export const InputForm = (props) =>{
    return(
        <>
            <input onChange={(e)=>{props.setInput(e.target.value)}} id={props.id} type="text"
                   className={`ock appearance-none placeholder-gray-400  text-green-900 bg-white border m-2 border-gray-400 hover:border-gray-500 px-4 py-${props.inputHeight} pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-500`}
                   placeholder={props.text} />
        </>
    )
}