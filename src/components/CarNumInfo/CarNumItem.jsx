import { useState } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import CarNumbers from './CarNumbers';

const CarNumItem = ({ item, show = false }) => {
  const [showDetail, setShowDetail] = useState(show || false);

  const toggleShowDetail = () => {
    if (show) {
      return;
    }
    setShowDetail(!showDetail);
  };

  return (
    <ComponentContainer>
      <ItemLocationContainer showDetail={showDetail} onClick={toggleShowDetail}>
        <ItemLocationText>{item.location}</ItemLocationText>
      </ItemLocationContainer>
      {/* {showDetail && ( */}
      <Transition in={showDetail} timeout={250} mountOnEnter unmountOnExit>
        {state => (
          <ItemDetailedContainer animate={state} className={state}>
            <ItemDetailText>
              {item.where} використовують такі номерні знаки
            </ItemDetailText>
            <CarNumbers numbers={item.number} />
          </ItemDetailedContainer>
        )}
      </Transition>
      {/* )} */}
    </ComponentContainer>
  );
};

export default CarNumItem;

const ComponentContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: white;
  width: 88vw;

  border-radius: 6px;

  overflow: hidden;
  /* z-index: 10; */
`;

const ItemLocationContainer = styled.div`
  position: relative;
  z-index: 100;

  width: 100%;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 5px;
  padding-right: 5px;

  background-color: #3f8df2;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: ${p => (p.showDetail ? '0' : '6px')};
  border-bottom-right-radius: ${p => (p.showDetail ? '0' : '6px')};
`;

const ItemLocationText = styled.p`
  /* margin-bottom: 10px; */
  font-size: 20px;

  text-align: center;
`;

const ItemDetailedContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  padding-left: 10px;

  background-color: yellow;

  text-align: center;

  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  /* opacity: 0; */
  transform: translateY(-100%);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.entering {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  &.entered {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  &.exiting {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  /* &.exited {
    transform: translateY(-70%);
  } */
`;

const ItemDetailText = styled.p`
  /* text-align: center;
  font-size: 17px; */
`;
