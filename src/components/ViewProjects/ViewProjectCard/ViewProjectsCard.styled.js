import styled, { css } from 'styled-components';
import {
  h2
} from '../../../theme/typography';
import rightArrowIcon from '../../../assets/shared/desktop/icon-right-arrow.svg';
import { Link } from 'react-router-dom'

const images = {
  app_design: {
    desktop: require('../../../assets/home/desktop/image-app-design.jpg').default,
    tablet: require('../../../assets/home/tablet/image-app-design.jpg').default,
    mobile: require('../../../assets/home/mobile/image-app-design.jpg').default,
  },
  graphic_design: {
    desktop: require('../../../assets/home/desktop/image-graphic-design.jpg').default,
    tablet: require('../../../assets/home/tablet/image-graphic-design.jpg').default,
    mobile: require('../../../assets/home/mobile/image-graphic-design.jpg').default,
  },
  web_design: {
    desktop: require('../../../assets/home/desktop/image-web-design-small.jpg').default,
    desktopXL: require('../../../assets/home/desktop/image-web-design-large.jpg').default,
    tablet: require('../../../assets/home/tablet/image-web-design.jpg').default,
    mobile: require('../../../assets/home/mobile/image-web-design.jpg').default,
  }
}

export const Card = styled(Link)`
  align-items: center;
  background-image: ${({ id }) => `url(${images[id].mobile})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 9rem 2.4rem;
  position: relative;
  text-decoration: none;

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
    background-image: ${({ id }) => `url(${images[id].tablet})`};
  }

  @media ${({ theme }) => theme.mediaQueries['above-768']} {
    // if there is a rowSpan prop, it is a taller column and requires a larger photo.
    background-image: ${({ rowSpan, id }) => rowSpan ? `url(${images[id].desktopXL})` : `url(${images[id].desktop})`};
    padding: 10.8rem 1.2rem;

    ${({ rowSpan }) => rowSpan && css`
      grid-row: ${rowSpan};
    `}
  }
`

export const Contents = styled.div`
  text-align: center;
  z-index: 1;
`

export const Title = styled(h2)`
  color: #FFF;
  font-weight: 500;
  letter-spacing: 1.4px;
  margin-bottom: 1.2rem;
`

export const Subtitle = styled.p`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-weight: 500;
  font-size: 1.5rem;
  justify-content: center;
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
    height: 12px;
    margin-left: 1.6rem;
    width: 12px;
  }
`