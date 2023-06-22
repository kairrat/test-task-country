import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import ThemeSwith from '../features/theme/theme-swith';
import { useCleanUp } from '../features/controls/use-cleanup';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;



export const Header = () => {
   const clearUp = useCleanUp();
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={clearUp}>Where is the world?</Title>
    <ThemeSwith/>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
