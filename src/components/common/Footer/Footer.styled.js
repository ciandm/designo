import styled, { css } from 'styled-components';
import letsTalkPattern from '../../../assets/shared/desktop/bg-pattern-call-to-action.svg';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  padding-top: 6rem;

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    padding-top: 8rem;
  }
`

export const LetsTalk = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.peach};
  background-image: url(${letsTalkPattern});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.colors.primary.white};
  display: flex;
  flex-direction: column;
  margin: 0 2.4rem;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 6.4rem 2.4rem;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    margin: 0 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    padding: 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 7.2rem 9.6rem;
  }
`

export const Copy = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  & h2 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 3.6rem;
    margin-bottom: 1.6rem;

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      font-size: 4rem;
      line-height: 1;
      max-width: 40%;
      min-width: 33rem;
    }
  }

  & p {
    font-size: 1.6rem;
    line-height: 2.5rem;
    margin-bottom: 3.2rem;

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      max-width: 60%;
      min-width: 30rem;
    }

    @media ${({ theme }) => theme.mediaQueries['above-1032']} {
      margin-bottom: 0;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    align-items: flex-start;
    text-align: left;
  }
`

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.black};
  position: relative;
  width: 100%;

  ${({ letsTalkRemoved }) => !letsTalkRemoved && css`
    &::before {
    background-color: inherit;
    content: '';
    display: block;
    height: 19rem;
    width: 100%;
    position: absolute;
    top: -19rem;
    z-index: -1;

    @media ${({ theme }) => theme.mediaQueries['above-480']} {
      height: 7.2rem;
      top: -7.2rem;
      }
    }
  `}
`

export const Contents = styled.div`
  padding: 6.4rem 2.4rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQueries['above-480']} {
    padding: 6.4rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['above-1032']} {
    padding: 6.4rem 0;
  }
`

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    flex-direction: row;
    padding-bottom: 4rem;
  }
`

export const LogoContainer = styled(Link)`
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  justify-content: center;
  display: flex;
  padding-bottom: 3.2rem;

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    border-bottom: none;
    padding-bottom: 0;
  }
`

export const Logo = styled.img`
  max-height: 2.7rem;
`

export const Links = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 3.2rem 0 4rem;

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    flex-direction: row;
    margin-left: auto;
    padding: 0;
  }
`

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: 1.4rem;
  line-height: 1;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-top: 3.2rem;

    @media ${({ theme }) => theme.mediaQueries['above-680']} {
      margin-top: 0;
      margin-left: 4.2rem;
    }
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    flex-direction: row;
    padding-top: 3rem;
  }
`

export const DetailsColumn = styled.div`
  color: ${({ theme }) => theme.colors.primary.white};
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  line-height: 2.6rem;
  text-align: center;

  & h5 {
    font-weight: 700;
    font-size: inherit;
    opacity: .5;
  }

  & p {
    opacity: .5;
  }

  & + & {
    margin-top: 4rem;

    @media ${({ theme }) => theme.mediaQueries['above-680']} {
      margin-top: 0;
      margin-left: 1rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    flex-basis: 33.3333337%;
    text-align: left;
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  @media ${({ theme }) => theme.mediaQueries['above-680']} {
    align-self: flex-end;
    margin-top: 0;
    margin-left: auto;
  }
`

export const SocialLink = styled.a`
  padding: 12px;

  & + & {
    margin-left: 4px;
  }
`

export const Icon = styled.img`
  height: 24px;
  width: 24px;

`