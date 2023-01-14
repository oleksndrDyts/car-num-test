import styled from 'styled-components';

import AppBar from 'components/AppBar';

import { Container } from 'components/Utils/Container.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <ComponentContainer>
          <AppBar />
        </ComponentContainer>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  padding-top: 17.5px;
  padding-bottom: 17.5px;

  height: 60px;

  background-color: #0004ee;

  z-index: 100;
`;

const ComponentContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
`;
