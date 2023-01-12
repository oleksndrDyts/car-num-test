import styled from 'styled-components';

import CarNumInfo from '../components/CarNumInfo';
import NumberFilter from '../components/NumberFilter';

import { filterNumbers } from '../helpers/filterNumbers';

import { Container } from '../components/Utils/Container.styled';

import numbers from '../car-numbers-ua.json';
import { useState } from 'react';

const FindCarNumber = () => {
  const [typeOfSearch, setTypeOfSearch] = useState('byNumber');
  const [filter, setFilter] = useState('');

  const onSelectHandleChange = e => {
    setTypeOfSearch(e.currentTarget.value);
    setFilter('');
  };

  const onFilterChange = value => {
    setFilter(value);
  };

  const filteredNumbers = filterNumbers(filter, numbers, typeOfSearch);

  return (
    <Container>
      <PageContainer>
        <NumberFilter
          value={filter}
          onChange={onFilterChange}
          type={typeOfSearch}
        />

        <Select name="type" id="type" onChange={onSelectHandleChange}>
          <option value="byNumber">Пошук по номерах</option>
          <option value="byRegion">Пошук по областях</option>
        </Select>

        <CarNumInfo
          numbers={filteredNumbers}
          type={typeOfSearch}
          filter={filter}
        />
      </PageContainer>
    </Container>
  );
};

export default FindCarNumber;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  margin-top: 10px;
  margin-bottom: 10px;
`;
