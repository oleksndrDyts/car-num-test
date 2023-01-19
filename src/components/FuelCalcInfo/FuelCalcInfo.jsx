import styled from 'styled-components';

const FuelCalcInfo = ({ result, type, formState }) => {
  const textOnDistance = `${formState.distance}`;
  const textOn100 = '100';
  const liters = Number(result.toFixed(2));
  // const is = result === 0 && !Number.isFinite(liters) && !Number.isNaN(result);
  // console.log(!is);
  // console.log(
  //   result !== 0 && !Number.isFinite(liters) && !Number.isNaN(result)
  // );
  // console.log(result);
  // console.log('===');
  // console.log(result === 0);
  // console.log(Number.isFinite(liters));
  // console.log(Number.isNaN(result));

  const is = result === 0 || !Number.isFinite(liters) || Number.isNaN(result);
  console.log(liters);
  // console.log(Number.isFinite(0.01));
  console.log(Number.isFinite(Number(liters)));
  return (
    <Info>
      {is
        ? 'Введіть дані'
        : `Витрата палива на ${
            type === 'fuel/distance' ? textOnDistance : textOn100
          } км: `}

      {!is && <Litters>{liters} л.</Litters>}
    </Info>
  );
};

export default FuelCalcInfo;

const Info = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Litters = styled.span`
  font-weight: bold;
`;

// відстань / 100 * літрів на 100
// літри / км * 100
