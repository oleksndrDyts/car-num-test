import { useState } from 'react';
import styled from 'styled-components';

import Select from 'components/Select';
import FuelCalcForm from 'components/FuelCalcForm';
import FuelCalcInfo from 'components/FuelCalcInfo';

import { Container } from '../components/Utils/Container.styled';

import { fuelCalc } from 'helpers/fuelCalc';

import { fuelCalcSelectItems } from 'data/selectItems';
import { useEffect } from 'react';

const FuelCalc = () => {
  const [typeOfCalc, setTypeOfCalc] = useState('fuel/distance');
  const [fuelFormState, setFuelFormState] = useState({});
  const [calcInfo, setCalcInfo] = useState(0);

  const onSelectHandleChange = e => {
    setTypeOfCalc(e.currentTarget.value);
    setFuelFormState({});
  };

  const onFormHandleChange = state => {
    setFuelFormState(prevState => ({
      ...prevState,
      ...state,
    }));
  };

  useEffect(() => {
    setCalcInfo(fuelCalc(fuelFormState, typeOfCalc));
  }, [fuelFormState, typeOfCalc]);

  return (
    <Container>
      <PageContainer>
        <Title>Розрахунок витрат палива</Title>

        <Select onSelect={onSelectHandleChange} items={fuelCalcSelectItems} />
        <Text>
          Тут можна розрахувати
          {typeOfCalc === 'fuel/distance'
            ? ', скільки літрів потрібно для подолання певної дистанції'
            : ' витрату пального на 100 км'}
        </Text>
        <FuelCalcForm setState={onFormHandleChange} type={typeOfCalc} />
        <FuelCalcInfo
          result={calcInfo}
          type={typeOfCalc}
          formState={fuelFormState}
        />

        <Text>
          {typeOfCalc === 'fuel/distance'
            ? 'В першому полі, введіть загальну відстань поїздки, в другому розхід вашого авто'
            : 'В першому полі, введіть загальну відстань поїздки, в другому загальний розхід'}
        </Text>
      </PageContainer>
    </Container>
  );
};

export default FuelCalc;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px;
  padding-bottom: 40px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 22px;
`;

const Text = styled.p`
  text-align: center;
`;
