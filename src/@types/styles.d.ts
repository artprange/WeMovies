import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// definindo o tipo de defaultTheme e criando uma nova tipagem chamada 'theme type' 

//logo depois, declarei o módulo do styled em ts, assim posso sobrescrever os tipos já definidos no styled
//assim, o styled component terá acesso ao defaulttheme

//resumindo: o arquivo está tipando o styled components para que saiba quais propriedades do tema estão disponíveis.