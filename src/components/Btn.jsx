import getRandomNumbers from "../utils/getRandomNumbers"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const Btn = ({setPhraseSelected, setBgSelected}) => {
  const changePhrase = () => {
    const indexRandom = getRandomNumbers(quotes.length)
    const phraseRandom = quotes[indexRandom]
    setPhraseSelected(phraseRandom)
    setBgSelected(photos[getRandomNumbers(photos.length)])
  }
    return ( 
    <button className="bg-slate-500 py-2 px-4 rounded-xl text-white hover:scale-125 transition-transform cursor-pointer block" onClick={changePhrase}>Abrir otra</button>
  )
}

export default Btn