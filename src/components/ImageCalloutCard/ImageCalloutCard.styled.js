import styled from 'styled-components';
import {
  h2,
  body
} from '../../theme/typography';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding-top: ${({ removeMarginTop }) => removeMarginTop ? '' : '6rem'};
  padding-bottom: 6rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    border-radius: 15px;
    padding: 6rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-768']} {
    padding: 6rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    padding: 8rem 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    border-radius: 15px;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-direction: row;
    height: 64rem;
  }
`

export const Picture = styled.picture`
  height: 32rem;

  & img {
    height: 100%;
    object-fit: cover;
    object-position: 50% 60%;
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    height: 100%;
    max-width: 476px;
  }
`

export const Content = styled.div`
  background-color: #FDF3F0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 8rem 2.4rem;
  position: relative;
  text-align: center;

  &::before {
    background-image: url(${require('../../assets/shared/desktop/bg-pattern-three-circles.svg').default});
    background-size: 59rem;
    content: '';
    display: block;
    height: 584px;
    left: 0;
    position: absolute;
    top: 0;
    width: 584px;

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      bottom: 44px;
      left: unset;
      right: 12px;
      top: unset;
    }

    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      bottom: 0;
      left: -146px;
      right: unset;
      top: unset;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    padding: 6.8rem 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-basis: 58.3333333%;
    justify-content: center;
    height: 100%;
    order: ${({ contentLeft }) => contentLeft ? -1 : null};
    padding: 0 9.6rem;
    text-align: left;
    width: 58.3333333%;
  }
`

export const Title = styled(h2)`
  color: ${({ theme }) => theme.colors.primary.peach};
  margin-bottom: 2.4rem;
`

export const Body = styled(body)`
  color: ${({ theme }) => theme.colors.secondary.darkGrey};
  & + & {
    margin-top: 3rem;
  }
`