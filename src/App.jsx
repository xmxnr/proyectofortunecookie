import { useState } from 'react';
import './App.css';
import quotes from './data/phrases.json';
import getRandomNumbers from './utils/getRandomNumbers';
import Phrase from './components/Phrase';
import Btn from './components/Btn';
import photos from './data/photos.json';

function App() {
	const indexRandom = getRandomNumbers(quotes.length);
	const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
	const [bgSelected, setBgSelected] = useState(
		photos[getRandomNumbers(photos.length)],
	);

	const objStyles = {
		backgroundImage: `url(/images/fondo${bgSelected}.png)`,
	};
	return (
		<div style={objStyles} className='min-h-screen bg-cover bg-center flex justify-center items-center'>
			<h1 className='absolute top-10 text-3xl uppercase font-black text-center drop-shadow-lg text-yellow-200 stroke-slate-500' >Galleta de la fortuna</h1>
			<article className='max-w-[400px] bg-white p-6 rounded-xl shadow-2xl'>
			<Phrase phraseSelected={phraseSelected} />
			<Btn setPhraseSelected={setPhraseSelected} setBgSelected = {setBgSelected}/>
			</article>
			<footer className='absolute bottom-10 bg-orange-200 rounded-lg text-slate-400 opacity-60 hover: scale-125 transition-transform cursor-pointer'>
				<p>{phraseSelected.author}</p>
			</footer>
		</div>
	);
}

export default App;
