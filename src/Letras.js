export default function Letras({ btnClicados, setBtnClicados, setImgForca, palavra, setPalavra, palavraEscolhida, qtdErros, setQtdErros, setCorPalavra, imgsForca }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function btnClicado(letra) {
        let novoBtnClicados = [...btnClicados, letra];
        setBtnClicados(novoBtnClicados);

        if (palavraEscolhida.includes(letra)) {
            let novaPalavra = [...palavra];
            for (let i = 0; i < palavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === letra) {
                    novaPalavra[i] = letra;
                }
            }
            setPalavra(novaPalavra);
            if (novaPalavra.includes('_')) {
                console.log('ainda nao acabo');
            } else {
                setCorPalavra('letraPalavra ganhou');
                setBtnClicados(alfabeto);
            }
        } else {
            let novaQtdErro = qtdErros + 1;
            setQtdErros(novaQtdErro);
            setImgForca(imgsForca[novaQtdErro]);

            if (novaQtdErro === 6) {
                let novaPalavra = [...palavra];
                for (let i = 0; i < palavraEscolhida.length; i++) {
                    novaPalavra[i] = palavraEscolhida[i];
                }
                setPalavra(novaPalavra);
                setBtnClicados(alfabeto);
                setCorPalavra('letraPalavra perdeu');
            }
        }
    }

    return (
        <div className="letras">
            {alfabeto.map((letra) => (<button data-test="letter" onClick={() => btnClicado(letra)} disabled={(btnClicados.includes(letra)) ? true : false} key={letra} className={(btnClicados.includes(letra)) ? `btnLetras` : `btnLetras btnLetrasHabilitado`}>{letra}</button>))}
        </div>
    );

}