import styled from 'styled-components';
import {
  h1,
  body
} from '../../theme/typography';
import designIntroMobile from '../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg';
import designIntroTablet from '../../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg';

export const Hero = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  color: ${({ theme }) => theme.colors.primary.white};
  margin-bottom: 4.8rem;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 10.8rem 2.4rem;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 100;

  &::before {
    background-image: url(${designIntroMobile});
    background-repeat: no-repeat;
    background-position: right top;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      background-image: url(${designIntroTablet});
      background-position: 10% 50%;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    border-radius: 1.5rem;
    margin: 0 4rem 6rem;
    padding: 6.4rem 0;
    overflow: hidden;
    width: initial;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    margin: 0 auto 8rem;
    padding: 6.4rem 19rem;
  }
`

export const Title = styled(h1)`
  margin-bottom: 2.4rem;
`

export const Subtitle = styled(body)`
  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    margin: 0 auto;
    max-width: 60%;
  }
`