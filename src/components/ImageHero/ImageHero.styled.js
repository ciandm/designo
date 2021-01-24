import styled from 'styled-components';
import {
  h1,
  body
} from '../../theme/typography'

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidth};

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    border-radius: 15px;
    margin: 0 4rem 6rem;
    overflow: hidden;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-direction: row;
    margin: 0 auto 8rem;
  }
`

export const Image = styled.div`
  background-image: url(${require('../../assets/about/mobile/image-about-hero.jpg').default});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 32rem;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    background-image: url(${require('../../assets/about/tablet/image-about-hero.jpg').default});
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    background-image: url(${require('../../assets/about/desktop/image-about-hero.jpg').default});
    flex: 1;
    height: 48rem;
    order: 1;
  }
`

export const Copy = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  color: ${({ theme }) => theme.colors.primary.white};
  display: flex;
  flex-direction: column;
  padding: 8rem 2.4rem;
  position: relative;
  text-align: center;
  overflow: hidden;
  z-index: 10;

  &::before {
    background-image: url(${require('../../assets/about/mobile/bg-pattern-hero-about-mobile.svg').default});
    background-position: right 25%;
    background-repeat: no-repeat;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      background-image: url(${require('../../assets/home/desktop/bg-pattern-hero-home.svg').default});
      height: 640px;
      left: -108px;
      top: -440px;
      transform: rotate(90deg);
      right: unset;
      width: 640px;
    }

    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      bottom: 0;
      left: unset;
      top: unset;
      transform: rotate(90deg);
      right: -12px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    padding: 6.4rem 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-basis: 58.3333333%;
    justify-content: center;
    text-align: left;
    padding: 0 9.6rem;
    width: 58.3333333%;
  }
`

export const Title = styled(h1)`
  margin-bottom: 2.4rem;
`

export const Body = styled(body)`
  font-size: 1.5rem;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    font-size: 1.6rem;
  }
`