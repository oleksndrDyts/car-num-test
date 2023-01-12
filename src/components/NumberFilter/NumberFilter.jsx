import styled from 'styled-components';

const NumberFilter = ({ value, onChange, type }) => {
  const isTypeByNumber = type === 'byNumber' ? true : false;

  return (
    <ComponentContainer>
      <Input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.currentTarget.value);
        }}
        maxLength={isTypeByNumber ? 2 : 20}
        isTypeByNumber={isTypeByNumber}
      />
    </ComponentContainer>
  );
};

export default NumberFilter;

const ComponentContainer = styled.div``;

const Input = styled.input`
  text-transform: ${p => (p.isTypeByNumber ? 'uppercase' : 'none')};
`;
