import styled from 'styled-components';

export const h1 = styled.h1`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.6rem;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    font-size: 4.8rem;
    line-height: 1;
  }
`

export const h2 = styled.h2`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.6rem;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    font-size: 4rem;
    line-height: 4.8rem;
  }
`

export const h3 = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  text-transform: uppercase;
`

export const body = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
`