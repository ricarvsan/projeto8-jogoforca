import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';
import Jogo from './Jogo';
import Letras from './Letras';
import { useState } from 'react';

export default function App() {

  const imgsForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  let [imgForca, setImgForca] = useState(imgsForca[0]);
  let [palavra, setPalavra] = useState(['']);
  let [palavraEscolhida, setPalavraEscolhida] = useState('');
  let [btnClicados, setBtnClicados] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  let [qtdErros, setQtdErros] = useState(0);
  let [corPalavra, setCorPalavra] = useState('palavra')

  return (
    <div>
        <Jogo imgForca={imgForca} setImgForca={setImgForca} palavra={palavra} setPalavra={setPalavra} palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida} btnClicados={btnClicados} setBtnClicados={setBtnClicados} qtdErros={qtdErros} setQtdErros={setQtdErros} corPalavra={corPalavra} setCorPalavra={setCorPalavra} imgsForca={imgsForca} />
        <Letras btnClicados={btnClicados} setBtnClicados={setBtnClicados} setImgForca={setImgForca} palavra={palavra} setPalavra={setPalavra} palavraEscolhida={palavraEscolhida} qtdErros={qtdErros} setQtdErros={setQtdErros} setCorPalavra={setCorPalavra} imgsForca={imgsForca} />
    </div>
  );
}