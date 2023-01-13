import styled from 'styled-components';

import CarNumItem from './CarNumItem';

const CarNumInfo = ({ numbers, type, filter }) => {
  const isTypeByNumber = type === 'byNumber' ? true : false;

  if (filter === '') {
    return <InfoText>Введіть пошуковий запит</InfoText>;
  }

  if (numbers.length === 0) {
    return <InfoText>Нічого не знайдено</InfoText>;
  }

  if (filter.length < 2 && isTypeByNumber) {
    return <InfoText>Потрібно ввести два символи</InfoText>;
  }

  if (numbers.length === 1) {
    return <CarNumItem item={numbers[0]} show={true} />;
  }

  return (
    <ComponentContainer>
      <ul>
        {numbers.map(number => (
          <ListItem key={number.number}>
            <CarNumItem item={number} />
          </ListItem>
        ))}
      </ul>
    </ComponentContainer>
  );
};

export default CarNumInfo;

const ComponentContainer = styled.div`
  border-radius: 6px;
`;

const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const InfoText = styled.p`
  text-align: center;
`;
