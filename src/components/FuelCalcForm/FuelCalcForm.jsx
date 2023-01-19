import { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const regexp = /^[\d.,:]*$/;

const FuelCalcForm = ({ setState, type }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
    getValues,
  } = useForm({ mode: 'onChange' });

  const onFormChange = state => {
    setState(state);
  };

  useEffect(() => {
    resetField('distance');
    resetField('consumption');
  }, [type]);

  return (
    <Form onChange={handleSubmit(onFormChange)}>
      <Label>
        Відстань в км
        <Input
          {...register('distance', {
            pattern: { value: regexp, message: 'Введіть число!' },
          })}
          type="number"
        />
      </Label>
      {errors?.distance?.message && <Error>{errors.distance.message}</Error>}
      <Label>
        {type === 'fuel/distance'
          ? 'Розхід на 100 км'
          : `Розхід на ${
              getValues('distance') === undefined
                ? 'всю відстань'
                : getValues('distance') + ' км'
            }`}

        <Input
          {...register('consumption', {
            pattern: { value: regexp, message: 'Введіть число!' },
          })}
          type="number"
        />
      </Label>
      {errors?.consumption?.message && (
        <Error>{errors.consumption.message}</Error>
      )}
    </Form>
  );
};

export default FuelCalcForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin-top: 15px;
  /* width: 100%; */
  /* justify-content: space-around; */
`;

const Label = styled.label`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  width: 100px;

  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;

  border: 1px solid #3f8df2;
  border-radius: 6px;
  outline-color: #3f8df2;
  font-size: 16px;
  text-transform: none;
`;

const Error = styled.p`
  margin-bottom: 10px;

  text-align: center;
  color: red;
`;
