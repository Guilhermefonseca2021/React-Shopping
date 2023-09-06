import { Html, Head, NextScript, Main} from 'next/document';
import { getCssText } from '../src/styles';

// era todo esse modo para declarar fonts hoje é no layout.
export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

                {/* retorna todo css responsavel por aquela pagina que o usuario estiver com server-rendering */}
                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>
            <body>
        {/* next dubstituiu nosso index pelas declaracoes abaixo:     */}
        {/* <div id="root"> </div>   por;     */}
                <Main />  
        {/* <script type="text/javascript" src="main.ts"> </script> */}
                <NextScript /> 
            </body>
        </Html>
    )
}