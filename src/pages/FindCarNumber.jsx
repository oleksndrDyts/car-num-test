import { useState } from 'react';
import styled from 'styled-components';

import CarNumInfo from '../components/CarNumInfo';
import NumberFilter from '../components/NumberFilter';
import Select from 'components/Select';

import { Container } from '../components/Utils/Container.styled';

import { filterNumbers } from '../helpers/filterNumbers';

import numbers from '../data/car-numbers-ua.json';
import { carNumSelectItems } from 'data/selectItems';

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

        <Select onSelect={onSelectHandleChange} items={carNumSelectItems} />

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

  padding-top: 80px;
  padding-bottom: 40px;
`;

// const Select = styled.select`
//   margin-top: 10px;
//   margin-bottom: 10px;
// `;
