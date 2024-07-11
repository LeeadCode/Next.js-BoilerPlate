import * as S from './styles'

const Main = ({ title = 'Next Boilerplate', description = 'Typescript, NextJS e Styled Components' }) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.png" alt="Imagem de um Lampião." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
