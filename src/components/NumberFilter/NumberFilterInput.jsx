import styled from 'styled-components';

const NumberFilterInput = ({ onChange, value, numberLetters = false }) => {
  return (
    <ComponentContainer numberLetters={numberLetters}>
      <Pre>
        <FlagContainer>
          <FlagBlue />
          <FlagYellow />
        </FlagContainer>
        <PreText>UA</PreText>
      </Pre>
      {!numberLetters ? (
        <Input
          type="text"
          value={value}
          onChange={e => {
            onChange(e.currentTarget.value);
          }}
          maxLength={2}
        />
      ) : (
        <NumberLetters>{numberLetters}</NumberLetters>
      )}

      <After>
        <AfterText>XXXX AA</AfterText>
      </After>
    </ComponentContainer>
  );
};

export default NumberFilterInput;

const ComponentContainer = styled.div`
  margin-top: 10px;
  display: ${p => (p.numberLetters ? 'inline-flex' : 'flex')};

  scale: ${p => (p.numberLetters ? 0.8 : 1)};
`;

const Input = styled.input`
  display: flex;
  padding-left: 2px;
  /* padding-top: 1px; */
  /* padding-bottom: 1px; */

  width: 40px;
  border: none;
  border-radius: none;
  -webkit-border-radius: 0;
  background-color: #f1dfdf;

  border-left: 1px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;

  outline-color: #3f8df2;
  font-size: 25px;
  font-weight: bold;
  line-height: 1px;

  text-transform: uppercase;

  outline: 0;
`;

const NumberLetters = styled.p`
  padding-top: 4px;
  padding-left: 2px;
  background-color: white;

  width: 40px;

  border-left: 1px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;

  font-size: 25px;
  font-weight: bold;
  /* line-height: 1px; */

  text-transform: uppercase;
`;

const Pre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 20px;
  height: 40px;

  border: 2px solid black;
  border-right: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background-color: #0004ee;
`;

const FlagContainer = styled.div`
  padding-top: 2px;

  width: 14px;
  height: 10px;
`;
const FlagBlue = styled.div`
  width: 14px;
  height: 5px;
  background-color: #3f8df2;
`;
const FlagYellow = styled.div`
  width: 14px;
  height: 5px;
  background-color: yellow;
`;

const PreText = styled.p`
  color: #faecec;
  font-size: 8px;
  font-weight: bold;
`;

const After = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* line-height: 30px; */
  /* align-items: baseline; */

  /* margin-left: 1px; */

  width: 120px;
  height: 40px;

  /* padding-top: 5px; */

  font-size: 25px;
  font-weight: bold;

  border: 2px solid black;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  background-color: white;
`;

const AfterText = styled.p`
  display: flex;
  align-items: baseline;
  /* height: 20px; */

  /* line-height: 20px; */
`;
