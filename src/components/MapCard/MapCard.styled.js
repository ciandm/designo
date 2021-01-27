import styled from 'styled-components';
import {
  h2
} from '../../theme/typography';

export const Wrapper = styled.div`
  & + & {
    margin-top: 4rem;
    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      margin-top: 0;
    }
  }
  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    padding: 6rem 4rem;
    &:first-of-type {
      padding-top: 0;
    }
  }
  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    padding: 1.6rem 0;

    &:nth-of-type(3) {
      padding-bottom: 8rem;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    align-items: stretch;
    flex-direction: row;
  }
`

export const Image = styled.div`
  background-image: ${({ images }) => `url(${images.tablet})`};
  height: 32rem;
  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    border-radius: 15px;
    margin-bottom: 3rem;
  }
  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    height: initial;
    flex-shrink: 0;
    margin-bottom: 0;
    margin-left: ${({ flipped }) => flipped ? '0' : '3rem'};
    margin-right: ${({ flipped }) => flipped ? '3rem' : '0'};
    order: ${({ flipped }) => flipped ? 0 : 1};
    width: 32rem;
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
  width: 100%;
  z-index: 100;
  &::before {
    background-image: url(${require('../../assets/shared/desktop/bg-pattern-three-circles.svg').default});
    content: '';
    display: block;
    height: 584px;
    left: 0;
    position: absolute;
    top: 0;
    width: 584px;
    z-index: -1;
    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      bottom: 0;
      top: unset;
    }
  }
  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    padding: 8.8rem 7.4rem;
  }
  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    border-radius: 15px;
    padding: 8.8rem 9.6rem;
  }
`

export const Title = styled(h2)`
  color: ${({ theme }) => theme.colors.primary.peach};
  margin-bottom: 2.4rem;
  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    width: 100%;
  }
`

export const List = styled.ul`
  list-style: none;
  & + & {
    margin-top: 2.4rem;
    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      margin-top: 0;
    }
  }
  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    &:first-of-type {
      margin-right: 3rem;
    }
    flex-basis: 35%;
    min-width: 20rem;
    width: 35%;
  }
`

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.secondary.darkGrey};
  font-size: 1.5rem;
  line-height: 2.5rem;
  &:first-child {
    font-weight: 700;
  }
  & + & {
    margin-top: 6px;
  }
`