import * as S from './styles'

const Main = ({
  title = 'Empório do Açaí',
  description = 'Faça seu pedido!'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.png"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
