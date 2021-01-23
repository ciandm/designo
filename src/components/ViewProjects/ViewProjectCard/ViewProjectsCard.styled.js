import styled, { css } from 'styled-components';
import rightArrowIcon from '../../../assets/shared/desktop/icon-right-arrow.svg';

export const Card = styled.div`
  align-items: center;
  background-image: ${({ backgroundImages }) => `url(${backgroundImages.mobile})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 90px 24px;
  position: relative;

  &::after {
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 1;
    position: absolute;
    transition: opacity .1s ease-in, background-color .1s ease-in;
    width: 100%;
  }

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.primary.peach};
    opacity: .8;
  }

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    background-image: ${({ backgroundImages }) => `url(${backgroundImages.tablet})`};
  }

  @media ${({ theme }) => theme.mediaQueries['above-768']} {
    background-image: ${({ backgroundImages }) => `url(${backgroundImages.desktop})`};
    padding: 108px 24px;

    ${({ gridRow }) => gridRow && css`
      grid-row: ${gridRow};
    `}
  }
`

export const Contents = styled.div`
  text-align: center;
  z-index: 1;
`

export const Title = styled.h4`
  color: #FFF;
  font-size: 2.8rem;
  line-height: 3.6rem;
  letter-spacing: 1.4px;
  margin-bottom: 1.2rem;
`

export const Link = styled.a`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: 5px;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    background-image: url(${rightArrowIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    content: '';
    display: block;
    height: 16px;
    margin-left: 1.6rem;
    width: 16px;
  }
`