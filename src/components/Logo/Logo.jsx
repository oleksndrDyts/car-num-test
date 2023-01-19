import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Logo = ({ onClick }) => {
  return (
    <Link end to="/" onClick={onClick}>
      <Car>Car</Car>
      <Num>Num</Num>
    </Link>
  );
};

export default Logo;

const Link = styled(NavLink)`
  position: relative;

  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  z-index: 100;
`;

const Car = styled.span`
  color: white;
`;
const Num = styled.span`
  color: red;
`;
