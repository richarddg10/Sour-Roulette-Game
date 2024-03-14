import './QuestionsCards.css'

export function QuestionsCards({ idKey, onClick, infoTitle, infoImgIcon }) {
    return (
        <>
            <div className='card-container' key={idKey} onClick={onClick}>
                <h1 className='card-number'>{infoTitle}</h1>
                <img className='card-img' src={infoImgIcon}/>
            </div>
        </>
    )
}