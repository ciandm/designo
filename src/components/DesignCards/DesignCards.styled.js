import styled from 'styled-components';
import {
  h3,
  body
} from '../../theme/typography'

export const Container = styled.main`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 2.4rem;
  padding: 4.8rem 0;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    gap: 3.2rem;
    margin: 0 4rem;
    padding: 6rem 0;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    gap: 3.2rem 3rem;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    margin: 0 auto;
  }
`

export const Card = styled.div`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-direction: column;
    width: 100%;
  }
`

export const Image = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  height: 32rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    background-position: top;
    height: 31rem;
    flex-basis: 50%;
    width: 50%;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-basis: initial;
    min-height: 31rem;
    width: 100%;
  }
`

export const Details = styled.div`
  background-color: #FDF3F0;
  display: flex;
  flex-direction: column;
  padding: 3rem 3.2rem;
  text-align: center;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    flex-basis: 50%;
    justify-content: center;
    padding: 0 3rem;
    width: 50%;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-basis: 100%;
    padding: 3.2rem;
    width: 100%;
  }
`

export const Title = styled(h3)`
  color: ${({ theme }) => theme.colors.primary.peach};
  margin-bottom: 1.6rem;
`

export const Subtitle = styled(body)``