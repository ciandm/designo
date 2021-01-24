import React from 'react'
import PropTypes from 'prop-types'
import * as S from './DesignHero.styled';

function DesignHero({ title, children }) {
  return (
    <S.Hero>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{children}</S.Subtitle>
    </S.Hero>
  )
}

export default DesignHero

DesignHero.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
