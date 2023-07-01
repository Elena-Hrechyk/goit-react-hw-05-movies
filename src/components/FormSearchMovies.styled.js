import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  width: 400px;
  display: flex;

  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonSearch = styled.button`
  width: auto;
  height: 36px;
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: white;
  border: 2px solid blue;
  background-color: blue;
  border-radius: 4px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: yellow;
    color: blue;
    box-shadow: 2px 2px 2px #31463c6e;
  }
`;

export const InputSearch = styled(Field)`
  width: 100%;
  height: 36px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border: 2px solid blue;

  border-radius: 5px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
