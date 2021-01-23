import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 2.4rem;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    padding: 6rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex-direction: row;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 8rem 0;
  }
`