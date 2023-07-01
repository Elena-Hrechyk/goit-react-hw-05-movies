import PropTypes from 'prop-types';
import SadRobot from 'img/sad-robot-623x416.jpg';
import { BoxError, TitleError, ImgError } from './Error.styled';

const Error = ({ error }) => {
  return (
    <BoxError>
      <TitleError>{error}</TitleError>
      <ImgError src={SadRobot} alt="Sad robot" width="400" />
    </BoxError>
  );
};

Error.prototype = {
  error: PropTypes.string.isRequired,
};

export default Error;
