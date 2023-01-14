import styled from 'styled-components';

import { Container } from 'components/Utils/Container.styled';

const HomePage = () => {
  return (
    <Container>
      <PageContainer>
        <Text>Привіт! Ви на CarNum. Це ресурс для водіїв і не тільки.</Text>
      </PageContainer>
    </Container>
  );
};

export default HomePage;

const PageContainer = styled.div`
  padding-top: 80px;
`;

const Text = styled.p`
  text-align: center;
`;
