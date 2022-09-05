import { RegularButton, ButtonStyledLink } from './Button.styled';

const Button = ({ to, children }) => {
  if (to) return <ButtonStyledLink to={to}>{children}</ButtonStyledLink>;
  return <RegularButton>{children}</RegularButton>;
};

export default Button;
