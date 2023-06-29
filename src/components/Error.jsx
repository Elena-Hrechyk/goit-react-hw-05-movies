import SadRobot from 'img/sad-robot-623x416.jpg';
import { BoxError, TitleError, ImgError } from 'pages/Pages.styled';

export const Error = ({ error }) => {
  return (
    <BoxError>
      <TitleError>{error}</TitleError>
      <ImgError src={SadRobot} alt="Sad robot" width="400" />
    </BoxError>
  );
};
