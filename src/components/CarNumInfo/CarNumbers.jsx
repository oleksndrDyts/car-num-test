import styled from 'styled-components';

import NumberFilterInput from 'components/NumberFilter/NumberFilterInput';

const CarNumbers = ({ numbers }) => {
  return (
    <List>
      {numbers.slice(0, 2).map(num => {
        // console.log(num);
        return (
          <ListItem key={num}>
            <NumberFilterInput numberLetters={num} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default CarNumbers;

const List = styled.ul`
  /* display: flex; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  /* width: 180px; */
  margin-left: -16px;
  margin-right: -16px;
  :not(:last-child) {
    /* margin-right: -32px; */
  }
`;
