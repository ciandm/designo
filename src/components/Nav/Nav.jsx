import React, { useState, useEffect } from 'react'
import * as S from './Nav.styled';
import logo from '../../assets/shared/desktop/logo-dark.png';
import ROUTES from '../pages/routes/routes';

function Nav() {

  const [open, setOpen] = useState(false);
  // deviating from the theme media queries as this is the width where nav begins wrapping
  const [isMobile, setIsMobile] = useState(window.innerWidth < 680);
  const updateMedia = () => setIsMobile(window.innerWidth < 680);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })

  const handleNavToggle = () => {
    setOpen(prevOpen => !prevOpen);
    document.body.classList.toggle("body--no-scroll");
  }

  return (
    <S.Nav>
      <S.NavWrapper
        open={open}
      >
        <S.LogoContainer
          to="/"
        >
          <S.Logo
            src={logo}
            alt="Designo logo"
          />
        </S.LogoContainer>
        {isMobile &&
          <S.Hamburger
            open={open}
            onClick={() => handleNavToggle()}
          />
        }
        <S.NavItems
          open={open}
        >
          <S.NavLink
            to={ROUTES.ABOUT}
          >Our company</S.NavLink>
          <S.NavLink
            to={ROUTES.LOCATIONS}
          >Locations</S.NavLink>
          <S.NavLink
            to={ROUTES.CONTACT}
          >Contact</S.NavLink>
        </S.NavItems>
      </S.NavWrapper>
    </S.Nav>
  )
}

export default Nav
