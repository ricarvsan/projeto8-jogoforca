import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';
import palavras from './palavras';


export default function App() {

  let listaPalavras = palavras.sort(() => Math.random() - 0.5);
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let palavraEscolhida = '';

  console.log(listaPalavras)

  return (
    <div>
      <div className='top'>
        <div className='imgForca'>
          <img className='forca' src={forca6} alt=""></img>
        </div>
        <div className='escolherPalavra'>
          <button className="btnEscolherPalavra">
            Escolher Palavra
          </button>
          <div className='palavra'>
            {palavraEscolhida}
          </div>
        </div>        
      </div>

      <div className='letras'>
          {alfabeto.map((letra) => (<button disabled key={letra} className='btnLetras'>{letra}</button>))}
      </div>
    </div>
  );
}