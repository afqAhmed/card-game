import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import SingleCard from './components/SingleCard'

function App() {
  const cardImages = [
    { src: './src/assets/helmet-1.png', matched: false },
    { src: './src/assets/potion-1.png', matched: false },
    { src: './src/assets/ring-1.png', matched: false },
    { src: './src/assets/scroll-1.png', matched: false },
    { src: './src/assets/shield-1.png', matched: false },
    { src: './src/assets/sword-1.png', matched: false },
  ]
  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [turn, setTurn] = useState(0)

  const shuffleCards = () => {
    const allCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: uuid() }))
    setCards(allCards)
    setTurn(0)
  }

  const newGame = () => {
    shuffleCards()
  }

  const flippedCard = info => {
    choiceOne ? setChoiceTwo(info) : setChoiceOne(info)
  }

  useEffect(() => { shuffleCards() }, [])

  useEffect(() => {
    if(choiceOne && choiceTwo) {
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prev => {
          return prev.map(card => {
            if(card.src === choiceOne.src) {
              return ({ ...card, matched: true})
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    } 
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
    setTurn(prev => prev + 1)
  }

  return (
    <div className='f-container flex-col items-center'>
      <button 
        className='px-4 py-2 mb-8 mt-12 bg-blue-500 rounded-lg shadow-lg'
        onClick={newGame}
      >New Game</button>
      <p className='px-4 py-2 mb-8 bg-blue-500 rounded-lg shadow-lg'>Turns: {turn}</p>
      <div 
        className='g-container justify-center grid-cols-4 gap-4'>
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card}
            flippedCard={flippedCard} 
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  )
}

export default App
