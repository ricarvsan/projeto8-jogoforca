import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';
import palavras from './palavras';
import { useState } from 'react';


export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const imgsForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  let [imgForca, setImgForca] = useState(imgsForca[0]);
  let [palavra, setPalavra] = useState(['']);
  let [palavraEscolhida, setPalavraEscolhida] = useState('');
  let [btnClicados, setBtnClicados] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  let [qtdErros, setQtdErros] = useState(0);
  let [corPalavra, setCorPalavra] = useState('letraPalavra')

  function btnClicado(letra) {
    let novoBtnClicados = [...btnClicados, letra];
    setBtnClicados(novoBtnClicados);

    if(palavraEscolhida.includes(letra)) {
      let novaPalavra = [...palavra];
      for(let i = 0; i < palavraEscolhida.length; i++) {
        if(palavraEscolhida[i] === letra) {
          novaPalavra[i] = letra;
        }
      }
      setPalavra(novaPalavra);
      if(novaPalavra.includes('_')){
        console.log('ainda nao acabo');
      } else {
        setCorPalavra('letraPalavra ganhou');
        setBtnClicados(alfabeto);
      }
    } else {
      let novaQtdErro = qtdErros + 1;
      setQtdErros(novaQtdErro);
      setImgForca(imgsForca[novaQtdErro]);

      if(novaQtdErro === 6) {
        let novaPalavra = [...palavra];
        for(let i = 0; i < palavraEscolhida.length; i++) {
          novaPalavra[i] = palavraEscolhida[i];
        }
        setPalavra(novaPalavra);
        setBtnClicados(alfabeto);
        setCorPalavra('letraPalavra perdeu');
      }
    }
  }
  
  function criaPalavraEmBranco(palavra) {
    let palavraEmBranco = [];
    for(let i = 0; i < palavra.length; i++) {
      palavraEmBranco.push('_');
    }
  
    return palavraEmBranco;
  }
  
  function iniciaJogo() {
    //RESETA BOTOES CLIDADOS
    setBtnClicados([]);
    setQtdErros(0);
    setImgForca(imgsForca[0]);
    setCorPalavra('letraPalavra');

    let [palavraEscolhida] = palavras.sort(() => Math.random() - 0.5);
    setPalavraEscolhida(palavraEscolhida);
    console.log(palavraEscolhida)
    let palavraEmBranco = criaPalavraEmBranco(palavraEscolhida);
    setPalavra(palavraEmBranco);
  }

  return (
    <div>
      <div className='top'>
        <div className='imgForca'>
          <img data-test="game-image" className='forca' src={imgForca} alt=""></img>
        </div>
        <div className='escolherPalavra'>
          <button data-test="choose-word" className="btnEscolherPalavra" onClick={iniciaJogo}>
            Escolher Palavra
          </button>
          <div className='palavra'>
          {palavra.map((letra, indice) => (<div data-test="word" key={indice} className={corPalavra}>{letra}</div>))}
          </div>
        </div>        
      </div>

      <div className='letras'>
          {alfabeto.map((letra) => (<button data-test="letter" onClick={() => btnClicado(letra)} disabled={(btnClicados.includes(letra)) ? true : false} key={letra} className={(btnClicados.includes(letra)) ? `btnLetras` : `btnLetras btnLetrasHabilitado`}>{letra}</button>))}
      </div>
    </div>
  );
}