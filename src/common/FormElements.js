import styled from 'styled-components'

const NiceForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const SubmitButton = styled.input`
  margin: 1rem 0;
  background-color: white;
  border: solid var(--offblack-color) 2px;
  border-radius: 3rem;
  padding: .3rem .7rem;
  width: fit-content;
  font-weight: 500;
  &:hover {
    background-color: var(--offblack-color);
    color: white;
  }
`;
const NiceLabel = styled.label`
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0 .3rem;
`;

const EmailInput = styled.input`
  border: solid var(--offblack-color) 2px;
  padding: .5rem .7rem;
  border-radius: 5px;
`;
const GoBack = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--gray-color);
  padding-left: 1rem;

  &:hover {
    color: var(--red-color)
  }
`;
const TextField = styled.input`
    padding: .7rem .2rem;
    font-size: 1rem;
    border: solid var(--offblack-color) 2px;
    border-radius: 5px;
    display: block;
    width: 100%;

`;
const TextArea = styled.textarea`
    padding: .7rem .2rem;
    font-size: 1rem;
    border: solid var(--offblack-color) 2px;
    border-radius: 5px;
    display: block;
    width: 100%;
`;
export {
  NiceForm,
  SubmitButton,
  NiceLabel,
  EmailInput,
  GoBack,
  TextField,
  TextArea
}