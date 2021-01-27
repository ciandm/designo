import styled from 'styled-components';
import hamburger from '../../../assets/shared/mobile/icon-hamburger.svg';
import close from '../../../assets/shared/mobile/icon-close.svg';
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  position: relative;
  z-index: 4000;
`

export const NavWrapper = styled.div`
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3.6rem 2.4rem;
  z-index: 1000;

  &::before {
    background-color: rgba(0, 0, 0, .5);
    bottom: 0;
    content: '';
    display: ${({ open }) => open ? 'block' : 'none'};
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    padding: 6.4rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    padding: 6rem 0;
  }
`

export const LogoContainer = styled(Link)`
  
`

export const Logo = styled.img`
  max-height: 2.7rem;
`

export const Hamburger = styled.button`
  background-color: transparent;
  background-image: ${({ open }) => open ? `url(${close})` : `url(${hamburger})`};
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  height: 2.4rem;
  outline: none;
  width: 2.4rem;
`

export const NavItems = styled.ul`
  background-color: ${({ theme }) => theme.colors.primary.black};
  display: flex;
  flex-direction: column;
  left: 0;
  list-style: none;
  max-height: ${({ open }) => open ? '500px' : '0'};
  overflow: hidden;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 5000;

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    align-items: center;
    background-color: transparent;
    flex-direction: row;
    max-height: initial;
    overflow: initial;
    position: initial;
    width: auto;
  }
`

export const NavLink = styled(Link).attrs({ activeClassName: 'nav-item-active' })`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: 2.4rem;
  line-height: 2.5rem;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 2.4rem;
  position: relative;

  &.nav-item-active {
    color: ${({ theme }) => theme.colors.primary.peach};
  }

  & + & {
    padding-top: 3.2rem;
  }

  &:first-child {
    padding-top: 4.8rem;
  }

  &:last-child  {
    padding-bottom: 4.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    color: ${({ theme }) => theme.colors.secondary.darkGrey};
    font-size: 1.4rem;
    line-height: 1;
    padding: 2rem 0;

    &::after {
      background-color: ${({ theme }) => theme.colors.primary.peach};
      content: '';
      display: block;
      height: 1px;
      margin-top: 5px;
      transform: scaleX(0);
      transition: transform .25s ease-in-out;
      position: absolute;
      width: 100%;
    }

    &.nav-item-active {
      color: ${({ theme }) => theme.colors.secondary.darkGrey};
    }

    &.nav-item-active::after {
      transform: scaleX(1);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    & + & {
      padding-top: 2rem;
      margin-left: 4.2rem;
    }

    &:first-child {
      padding-top: 2rem;
    }

    &:last-child  {
      padding: 2rem 0;
    }
  }
`