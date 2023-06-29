import { Formik } from 'formik';
import * as yup from 'yup';
import { SearchForm, ButtonSearch, InputSearch } from 'pages/Pages.styled';

const schema = yup.object().shape({
  search: yup.string().required(),
});

const initialValues = {
  search: '',
};

const FormSearchMovies = ({ onSearch }) => {
  const onSubmit = (values, { resetForm }) => {
    const value = values.search.trim().toLowerCase();
    onSearch(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <SearchForm>
        <InputSearch
          type="text"
          name="search"
          placeholder="Search images and photos..."
        />
        <ButtonSearch type="submit">Search</ButtonSearch>
      </SearchForm>
    </Formik>
  );
};

export default FormSearchMovies;
