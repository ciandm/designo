import React, { useState, useEffect } from 'react'
import * as S from './Nav.styled';
import logo from '../../assets/shared/desktop/logo-dark.png';

function Nav() {

  const [open, setOpen] = useState(false);
  // deviating from the theme media queries as this is the width where nav begins wrapping
  const [isMobile, setIsMobile] = useState(window.innerWidth < 680);
  const updateMedia = () => setIsMobile(window.innerWidth < 680);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })

  return (
    <S.Nav>
      <S.NavWrapper
        open={open}
      >
        <S.Logo
          src={logo}
          alt="Designo logo"
        />
        {isMobile &&
          <S.Hamburger
            open={open}
            onClick={() => setOpen(prevOpen => !prevOpen)}
          />
        }
        <S.NavItems
          open={open}
        >
          <S.NavItem>Our company</S.NavItem>
          <S.NavItem>Locations</S.NavItem>
          <S.NavItem>Contact</S.NavItem>
        </S.NavItems>
      </S.NavWrapper>
    </S.Nav>
  )
}

export default Nav
