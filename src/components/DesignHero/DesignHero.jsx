import React from 'react'
import PropTypes from 'prop-types'
import * as S from './DesignHero.styled';

function DesignHero({ children }) {
  const { title, subtitle } = children;
  return (
    <S.Hero>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Hero>
  )
}
export default DesignHero

DesignHero.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
}
