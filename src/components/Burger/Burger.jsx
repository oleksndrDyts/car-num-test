import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { useRef, useEffect } from 'react';

const Burger = ({ inProp, onBurgerClick, children }) => {
  const targetEl = useRef(null);

  useEffect(() => {
    console.log('useEffect');
    if (inProp) {
      disableBodyScroll(targetEl);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [inProp]);

  return (
    <>
      <Transition in={inProp} timeout={250} mountOnEnter unmountOnExit>
        {state => (
          // <BurgerMenu state={state} el={children} />
          <Menu animate={state} className={state} ref={targetEl}>
            {children}
          </Menu>
        )}
      </Transition>
      <BurgerContainer isOpen={inProp} onClick={onBurgerClick}>
        <MiddleLine isOpen={inProp} />
      </BurgerContainer>
    </>
  );
};

export default Burger;

const Menu = styled.div`
  position: fixed;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 60px;

  padding-top: 50px;

  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;

  background-color: #3f8df2;

  z-index: 100;
  overflow: auto;

  transform: translateX(100%);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.entering {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  &.entered {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  &.exiting {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
`;

// const BurgerContainer = styled.div``;

const BurgerContainer = styled.div`
  margin-left: auto;

  position: relative;
  display: block;
  width: 40px;
  height: 25px;
  cursor: pointer;
  z-index: 101;
  ::before,
  ::after {
    content: ' ';
    position: absolute;
    left: 0;
    height: 5px;
    border-radius: 21px;
    transition: all 0.3s ease 0s;
    background-color: black;

    width: 100%;
  }

  ::before {
    top: ${p => (p.isOpen ? '50%' : '0')};
    transform: ${p =>
      p.isOpen ? 'rotate(-45deg) translate(0px, -60%)' : 'none'};
  }

  ::after {
    bottom: ${p => (p.isOpen ? '50%' : '0')};
    transform: ${p =>
      p.isOpen ? 'rotate(45deg) translate(0px, 60%)' : 'none'};
  }
`;

const MiddleLine = styled.span`
  position: absolute;
  left: 0;
  height: 5px;
  border-radius: 21px;
  transition: all 0.3s ease 0s;
  background-color: black;

  width: 100%;

  top: 50%;
  transform: ${p =>
    p.isOpen
      ? 'scale(0) translate(0px, -50%)'
      : 'scale(1) translate(0px, -50%)'};
`;
