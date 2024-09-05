export interface ButtonProps {
    movieId: number
    count: number
    addToCart: () => void
  }


  // definindo a interface de buttonProps, as propriedades que o botão recebe:
  // o id do filme, e o count number, o numero que deverá aparecer no carrinho
  // e addToCart que é a função de adicionar ao carrinho. tipo void proque não tem retorno