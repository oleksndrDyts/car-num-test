import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import FindCarNumber from '../pages/FindCarNumber';
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/find-car-num" element={<FindCarNumber />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
