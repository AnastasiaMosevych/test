import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
    inline-size: 90%;
    margin-inline: 10px;
    max-inline-size: 48em;
`

export const Header = styled.header`
    min-height: 50px;
    background-color: #5736A3;
    border: 10px solid transparent;
	border-top: 10px solid #fffa;
	border-left: 10px solid #fffa;
	box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25) inset;
    position: sticky;
    will-change: transform;
    top: 0;
    border-bottom: 1px solid #ECECEC;
    margin-bottom: 20px;
    box-shadow: 0 0.0625em 0.5em rgba(0, 0, 0, 0.3);
    }
`

export const NavList = styled.ul`
    list-style: none;
    padding: 5px;
    display: flex;
    gap: 2px;
    text-align: left;
`

export const NavListItem = styled.li`
    display: inline-flex;
    align-items: center;
    justify-content: center;
	padding: 14px;
	margin-left: 2px;
	font-family: 'Quicksand', sans-serif;
    font-size: 28px;
	color: #fff;
	cursor: pointer;
	transition: 0.3s linear all;
	user-select: none;
    &:hover {
        color: #CF9FFF;
    }
`

export const StyledLink = styled(NavLink)`
  color: inherit;
  display: block;
  padding-inline: 1em;
  text-decoration: none;
  &.active {
    color: #e0b0ff;
  }
`