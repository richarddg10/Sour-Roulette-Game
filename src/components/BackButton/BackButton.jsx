import './BackButton.css'

export function BackButton({ onClick }) {
    return (
        <>
            <button className='back-button' onClick={onClick}><img src="/backButton.png" /></button>
        </>
    )
}