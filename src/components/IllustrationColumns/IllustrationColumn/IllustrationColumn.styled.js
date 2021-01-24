import styled, { css } from 'styled-components';
import {
  h3,
  body
} from '../../../theme/typography';

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  & + & { 
    margin-top: ${({ columnContent }) => columnContent === 'text' ? '8rem' : '4.8rem'};

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      margin-top: ${({ columnContent }) => columnContent === 'text' ? '3.2rem' : '8rem'};
    }

    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      margin-top: 0;
      margin-left: 3rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-768']} {
    flex-direction: ${({ wrapsOnTablet }) => wrapsOnTablet ? 'row' : 'column'};
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-direction: column;
  }

`

export const ImageWrapper = styled.div`
  height: 20rem;
  flex-shrink: 0;
  margin-bottom: 4.8rem;
  position: relative;
  width: 20rem;

  &::before {
    background: linear-gradient(90deg, rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
    border-radius: 10rem;
    content: '';
    display: block;
    height: 100%;
    opacity: .2;
    position: absolute;
    transform: ${({ gradientRotation }) => `rotate(${gradientRotation})`};
    width: 100%;
    z-index: -1;
  }

  ${({ wrapsOnTablet }) => wrapsOnTablet && css`
    @media ${({ theme }) => theme.mediaQueries['above-768']} {
      margin-bottom: 0;
    }
  `}

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    margin-bottom: 4.8rem;
  }
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${({ wrapsOnTablet }) => wrapsOnTablet && css`
    @media ${({ theme }) => theme.mediaQueries['above-768']} {
      margin-left: 4.8rem;
    }
  `}

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    margin-left: 0;
  }
`

export const Title = styled(h3)`
  color: ${({ theme }) => theme.colors.secondary.darkGrey};
  margin-bottom: 3.2rem;
  text-align: center;

  ${({ wrapsOnTablet }) => wrapsOnTablet && css`
    @media ${({ theme }) => theme.mediaQueries['above-768']} {
      text-align: left;
      margin-bottom: 1.6rem;
    }
  `}

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    text-align: center;
    margin-bottom: 3.2rem;
  }
`

export const Body = styled(body)`
  color: ${({ theme }) => theme.colors.secondary.darkGrey};
  text-align: center;

  ${({ wrapsOnTablet }) => wrapsOnTablet && css`
    @media ${({ theme }) => theme.mediaQueries['above-768']} {
      text-align: left;
    }
  `}

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    text-align: center;
  }
`