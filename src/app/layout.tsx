import '../styles'
import type { Metadata } from 'next'
import { Roboto,} from 'next/font/google'
import { getCssText, globalCss } from '../styles'


export const metadata: Metadata = {
  title: 'Shop Nextjs',
  description: 'first create next app',
}

const robotofont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-Roboto',
  style: 'normal'
})

globalCss()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  globalCss()

  
  return (
    <html lang="pt-BR" className={robotofont.className}>
      <head>
        {/* retorna todo css responsavel por aquela pagina que o usuario estiver com server-rendering */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}></style>
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}
