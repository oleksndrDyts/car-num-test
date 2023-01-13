import styled from 'styled-components';
import NumberFilterInput from './NumberFilterInput';

const NumberFilter = ({ value, onChange, type }) => {
  return (
    <ComponentContainer>
      {type === 'byNumber' ? (
        <NumberFilterInput onChange={onChange} value={value} />
      ) : (
        <Input
          type="text"
          value={value}
          onChange={e => {
            onChange(e.currentTarget.value);
          }}
          maxLength={20}
        />
      )}
    </ComponentContainer>
  );
};

export default NumberFilter;

const ComponentContainer = styled.div``;

const Input = styled.input`
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;

  border: 1px solid #3f8df2;
  border-radius: 6px;
  outline-color: #3f8df2;
  font-size: 16px;
  text-transform: none;
`;
