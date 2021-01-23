import styled from 'styled-components';
import bgLeaf from '../../assets/shared/desktop/bg-pattern-leaf.svg';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 6rem 2.4rem;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    display: flex;
    justify-content: center;
    padding: 6rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    padding: 8rem 0;

    &::before {
      background-image: url(${bgLeaf});
      background-repeat: no-repeat;
      content: '';
      display: block;
      position: absolute;
      height: 60rem;
      margin: 0 auto; 
      max-width: 144rem;
      transform: translateY(-48rem);
      width: 100%;
      z-index: -1000;
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 2.4rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries['above-768']} {
    grid-template-columns: 1fr 1fr;
  }
`