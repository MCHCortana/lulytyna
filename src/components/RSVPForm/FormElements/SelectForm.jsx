export const SelectForm = ({setSelect, options, value}) =>{
    return(
        <>
            <select value={value} onChange={(e) => {
                setSelect(e.target.value)
            }}
                    className="lock m-2 text-green-900 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-500">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.text}</option>
                ))}
            </select>
        </>)
}