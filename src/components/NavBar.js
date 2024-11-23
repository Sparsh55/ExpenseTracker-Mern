import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 70px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5em;
  color: white;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  margin-left: 20px;
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s;

  &:hover {
    color: #ffd1a9;
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }
`;

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <NavBarContainer>
      <Logo>Expense Tracker</Logo>
      <NavItems>
        <NavItem to="/" exact>
          Home
        </NavItem>
        <NavItem to="/login">Login</NavItem>
        <NavItem to="/signup">Signup</NavItem>
        {isAuthenticated && <NavItem to="/dashboard">Dashboard</NavItem>}
      </NavItems>
    </NavBarContainer>
  );
};

export default NavBar;
