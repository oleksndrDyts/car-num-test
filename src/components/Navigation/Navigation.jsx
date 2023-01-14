import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = ({ navItems, onBurgerClick = null }) => {
  return (
    <Nav>
      <List>
        {navItems.map(({ path, label }) => (
          <ListItem key={label}>
            <NavItem end to={path} onClick={onBurgerClick}>
              {label}
            </NavItem>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li``;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    color: yellow;
  }
`;
