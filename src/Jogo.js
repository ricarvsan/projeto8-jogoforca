import palavras from './palavras';

export default function Jogo({ imgForca, setImgForca, palavra, setPalavra, setPalavraEscolhida, setBtnClicados, setQtdErros, corPalavra, setCorPalavra, imgsForca }) {

    function criaPalavraEmBranco(palavra) {
        let palavraEmBranco = [];
        for (let i = 0; i < palavra.length; i++) {
            palavraEmBranco.push('_');
        }
        return palavraEmBranco;
    }

    function iniciaJogo() {
        //RESETA BOTOES CLIDADOS
        setBtnClicados([]);
        setQtdErros(0);
        setImgForca(imgsForca[0]);
        setCorPalavra('palavra');

        let [palavraEscolhida] = palavras.sort(() => Math.random() - 0.5);
        setPalavraEscolhida(palavraEscolhida);
        console.log(palavraEscolhida)
        let palavraEmBranco = criaPalavraEmBranco(palavraEscolhida);
        setPalavra(palavraEmBranco);
    }

    return (
        <div className='top'>
            <div className='imgForca'>
                <img data-test="game-image" className='forca' src={imgForca} alt=""></img>
            </div>
            <div className='escolherPalavra'>
                <button data-test="choose-word" className="btnEscolherPalavra" onClick={iniciaJogo}>
                    Escolher Palavra
                </button>
                <div data-test="word" className={corPalavra} >
                    {palavra}                    
                </div>
            </div>
        </div>
    );
} 