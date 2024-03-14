import './Inputs.css'

export function Inputs({ onChange, value, placeholder }) {
    return (
        <>
            <input type='text' onChange={onChange} value={value} placeholder={placeholder} />
        </>
    )
}