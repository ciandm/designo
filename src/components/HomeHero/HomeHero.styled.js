import styled from 'styled-components';
import {
  h1,
  body
} from '../../theme/typography';
import bgPattern from '../../assets/home/desktop/bg-pattern-hero-home.svg';
import phoneImage from '../../assets/home/desktop/image-hero-phone.png';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.peach};
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  position: relative;
  margin-bottom: 6rem;
  max-width: ${({ theme }) => theme.maxWidth};
  overflow: hidden;

  &::before {
    background-image: url(${bgPattern});
    background-position: left;
    background-repeat: no-repeat;
    background-size: 64rem;
    content: '';
    display: block;
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      background-position: 150% 50%;
    }

    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      background-position: 100% 0;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    border-radius: 15px;
    margin: 0 4rem 6rem;
    padding-top: 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    align-items: stretch;
    flex-direction: row;
    margin: 0 auto;
    padding-top: 0;
    padding-left: 9.6rem;
  }
`

export const Intro = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.white};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 2.4rem;
  position: relative;
  z-index: 500;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    padding: 0 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    align-items: flex-start;
    flex-basis: 50%;
    max-width: 50%;
    padding: 14.4rem 0 14.4rem;
    text-align: left;
    width: 100%;
  }
`

export const Headline = styled(h1)`
  margin-bottom: 2.4rem;

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    margin-bottom: 3.2rem;
  }
`

export const Subheading = styled(body)`
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
    min-width: 35rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-basis: 83.333333337%;
    margin-bottom: 4rem;
    max-width: 83.333333337%;
  }
`

export const PhoneContainer = styled.div`
  display: flex;
  height: 45rem;
  position: relative;
  width: 100%;

  &::before {
    background-image: url(${phoneImage});
    background-position: center top;
    background-repeat: no-repeat;
    content: '';
    display: block;
    height: 60rem;
    position: absolute;
    transform: translateY(-9rem);
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      background-position: center 7%;
      height: 100%;
      transform: translateY(0);
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    bottom: 0;
    flex-basis: 41.66666667%;
    height: 100%;
    max-width: 41.66666667%;
    position: absolute;
    top: 0;
    right: 0;
  }
`