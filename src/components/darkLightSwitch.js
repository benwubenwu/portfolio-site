import React, { Fragment } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FaRegMoon } from 'react-icons/fa';
import styled from "styled-components";

const StyledFaRegMoon = styled(FaRegMoon)`
    color: gray;
`;
class DarkLightSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler> 
        {({ theme, toggleTheme }) => {
          const iconClass =
            theme === 'light' ? 'far fa-moon' : 'fas fa-adjust'
          return (
            <StyledFaRegMoon
                className={iconClass}
                onClick={() => {
                  const nextTheme = theme === 'light' ? 'dark' : 'light'
                  toggleTheme(nextTheme)
                }}
            > 
            </StyledFaRegMoon>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default DarkLightSwitch;