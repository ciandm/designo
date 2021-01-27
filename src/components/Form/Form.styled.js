import styled from 'styled-components';
import {
  h1,
  body
} from '../../theme/typography';

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  max-width: ${({ theme }) => theme.maxWidth};
  overflow: hidden;
  padding: 7.2rem 2.4rem;
  position: relative;
  z-index: 100;

  &::before {
    background-image: url(${require('../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg').default});
    content: "";
    display: block;
    height: 292px;
    left: -84px;
    position: absolute;
    top: 0;
    width: 584px;
    z-index: -1;

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      background-image: url(${require('../../assets/contact/desktop/bg-pattern-hero-desktop.svg').default});
      height: 640px;
      left: -124px;
      top: -87px;
      width: 640px;
    }

    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      bottom: 0;
      left: 0;
      top: unset;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    border-radius: 15px;
    margin: 0 4rem 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    align-items: center;
    flex-direction: row;
    margin: 0 auto 8rem;
    padding: 5.4rem 9.6rem;
  }
`

export const Intro = styled.div`
  color: ${({ theme }) => theme.colors.primary.white};
  margin-bottom: 4.8rem;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    text-align: left;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    flex: 1;
    padding-right: 9.6rem;
  }
`

export const Title = styled(h1)`
  margin-bottom: 2.4rem;
`

export const Subtitle = styled(body)``

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;

  & button {
    margin-top: 4rem;

    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      align-self: flex-end;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    width: 38rem;
  }
`
export const InputGroup = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;

  & + & {
    margin-top: 1.2rem;
  }

  & textarea {
    min-height: 9.6rem;
    max-height: 9.6rem;
    resize: none;
  }
`

export const Input = styled.input`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  border-radius: 0;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 1);
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: 500;
  font-size: 1.6rem;
  outline: none;
  padding: 1.2rem 1.4rem;
  position: relative;
  width: 100%;

  &::placeholder {
    color: inherit;
    opacity: .5;
  }

  &:hover,
  &:active, 
  &:focus {
    box-shadow: 0 3px 0 rgba(255, 255, 255, 1);
  }
`

export const InputError = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.white};
  display: flex;
  font-size: 1.2rem;
  font-style: italic;
  position: absolute;
  right: 8px;
  top: ${({ topAligned }) => topAligned ? '16px' : null};

  &::after {
    background-image: url(${require('../../assets/contact/desktop/icon-error.svg').default});
    content: '';
    display: block;
    height: 2rem;
    margin-left: 1rem;
    width: 2rem;
  }
`