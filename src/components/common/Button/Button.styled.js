import styled, { css } from 'styled-components';

export const Button = styled.button.attrs(({ type }) => ({ type: type }))`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  flex-shrink: 0;
  font-size: 1.5rem;
  outline: none;
  letter-spacing: 1px;
  padding: 1.6rem 2.4rem;
  text-transform: uppercase;
  text-decoration: none;

  ${({ variation }) => {
    if (variation === 'white') {
      return css`
        background-color: ${({ theme }) => theme.colors.primary.white};
        color: ${({ theme }) => theme.colors.secondary.darkGrey};

        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary.lightPeach};
          color: ${({ theme }) => theme.colors.primary.white};
        }
      `
    } else if (variation === 'peach') {
      return css`
        background-color: ${({ theme }) => theme.colors.primary.peach};
        color: ${({ theme }) => theme.colors.primary.white};

        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary.lightPeach};
        }
      `
    }
  }}
`