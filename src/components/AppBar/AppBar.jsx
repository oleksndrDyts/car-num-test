import { useState } from 'react';

import Navigation from 'components/Navigation/Navigation';
import Burger from 'components/Burger';
import Logo from 'components/Logo';

const AppBar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const burgerToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const setBurgerIsClosed = () => {
    setIsBurgerOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Головна' },
    { path: '/find-car-num', label: 'Пошук номерів' },
    { path: '/fuel-calc', label: 'Розрахунок палива' },
  ];

  return (
    <>
      <Logo onClick={setBurgerIsClosed} />
      <Burger inProp={isBurgerOpen} onBurgerClick={burgerToggle}>
        <Navigation navItems={navItems} onBurgerClick={burgerToggle} />
      </Burger>
    </>
  );
};

export default AppBar;
