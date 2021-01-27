import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import * as S from './Footer.styled';
import { Link } from 'react-router-dom';
import ROUTES from '../../pages/routes/routes';
// images
import logo from '../../../assets/shared/desktop/logo-light.png';
import facebook from '../../../assets/shared/desktop/icon-facebook.svg';
import instagram from '../../../assets/shared/desktop/icon-instagram.svg';
import pinterest from '../../../assets/shared/desktop/icon-pinterest.svg';
import twitter from '../../../assets/shared/desktop/icon-twitter.svg';
import youtube from '../../../assets/shared/desktop/icon-youtube.svg';

function Footer({
  letsTalkRemoved
}) {
  return (
    <S.FooterWrapper>
      {
        !letsTalkRemoved &&
        <S.LetsTalk>
          <S.Copy>
            <h2>Let’s talk about your project</h2>
            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
          </S.Copy>
          <Button
            variation="white"
            as={Link}
            to={ROUTES.CONTACT}
          >
            Get in touch
          </Button>
        </S.LetsTalk>
      }
      <S.Footer
        letsTalkRemoved={letsTalkRemoved}
      >
        <S.Contents>
          <S.FooterNav>
            <S.LogoContainer
              to={ROUTES.HOME}
            >
              <S.Logo
                src={logo}
                alt="Designo logo"
              />
            </S.LogoContainer>
            <S.Links>
              <S.FooterLink
                to={ROUTES.ABOUT}
              >Our company</S.FooterLink>
              <S.FooterLink
                to={ROUTES.LOCATIONS}
              >Locations</S.FooterLink>
              <S.FooterLink
                to={ROUTES.CONTACT}
              >Contact</S.FooterLink>
            </S.Links>
          </S.FooterNav>
          <S.Details>
            <S.DetailsColumn>
              <h5>Designo Central Office</h5>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </S.DetailsColumn>
            <S.DetailsColumn>
              <h5>Contact Us (Central Office)</h5>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </S.DetailsColumn>
            <S.Social>
              <S.SocialLink>
                <S.Icon
                  src={facebook}
                  alt="Facebook link"
                />
              </S.SocialLink>
              <S.SocialLink>
                <S.Icon
                  src={youtube}
                  alt="YouTube link"
                />
              </S.SocialLink>
              <S.SocialLink>
                <S.Icon
                  src={twitter}
                  alt="Twitter link"
                />
              </S.SocialLink>
              <S.SocialLink>
                <S.Icon
                  src={pinterest}
                  alt="Pinterest link"
                />
              </S.SocialLink>
              <S.SocialLink>
                <S.Icon
                  src={instagram}
                  alt="Instagram link"
                />
              </S.SocialLink>
            </S.Social>
          </S.Details>
        </S.Contents>
      </S.Footer>
    </S.FooterWrapper>
  )
}

export default Footer

Footer.propTypes = {
  letsTalkRemoved: PropTypes.bool,
}

Footer.defaultProps = {
  letsTalkRemoved: false
}