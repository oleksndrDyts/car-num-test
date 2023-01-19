import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import FindCarNumber from '../pages/FindCarNumber';
import HomePage from 'pages/HomePage';
import FuelCalc from 'pages/FuelCalc';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/find-car-num" element={<FindCarNumber />} />
          <Route path="/fuel-calc" element={<FuelCalc />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
