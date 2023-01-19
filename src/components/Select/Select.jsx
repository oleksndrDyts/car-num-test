import styled from 'styled-components';

const Select = ({ onSelect, items }) => {
  return (
    <ComponentContainer>
      <SelectStyled name="type" id="type" onChange={onSelect}>
        {items.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectStyled>
    </ComponentContainer>
  );
};

export default Select;

const ComponentContainer = styled.div`
  position: relative;

  ::before {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-45%);

    display: block;

    /* width: 10px;
    height: 10px; */

    /* background-color: red; */

    pointer-events: none;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 6px 0 6px;
    border-color: #0004ee transparent transparent transparent;
  }
  /* display: flex;
  align-items: center; */
`;

const SelectStyled = styled.select`
  /* width: 202px; */

  margin-top: 20px;
  margin-bottom: 20px;

  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 30px;
  padding-left: 10px;

  /* text-align: center; */
  font-size: 16px;
  color: black;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  /* border: 1px solid yellow; */
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background-color: #3f8df2;
  outline: none;
`;
