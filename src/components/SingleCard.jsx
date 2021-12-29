function SingleCard({ card, flippedCard, flipped }) {

  const selectCard = () => {  
    flippedCard(card)
  }

  return (
    <div className='relative'>
      <img src={card.src} className='w-full' />
      <img 
        src='./src/assets/cover.png' 
        className= {`w-full h-full front ${flipped ? 'flipped' : ''}`}
        onClick={selectCard} 
      />
    </div>
  )
}

export default SingleCard