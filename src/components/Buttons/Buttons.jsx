import './Buttons.css'

export function Buttons({ className, onClick, placeholder }) {
    return (
        <>
            <button className={className} onClick={onClick}>{placeholder}</button>
        </>
    )
}