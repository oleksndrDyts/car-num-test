const calcTotalFuelConsumption = ({ distance = 0, consumption = 0 }) => {
  console.log(Number(distance), consumption);
  return (Number(distance) / 100) * Number(consumption);
};

const calcFuelConsumptionOn100 = ({ distance = 1, consumption = 0 }) => {
  // console.log((consumption / distance) * 100);
  // console.log(Number(consumption), Number(distance));

  return (Number(consumption) / Number(distance)) * 100;
};

export const fuelCalc = (state, type) => {
  // console.log(state, type);
  return type === 'fuel/distance'
    ? calcTotalFuelConsumption(state)
    : calcFuelConsumptionOn100(state);
};

// відстань / 100 * літрів на 100
// літри / км * 100
