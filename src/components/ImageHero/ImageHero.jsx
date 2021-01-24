import React from 'react'
import PropTypes from 'prop-types'
import * as S from './ImageHero.styled';

function ImageHero({ children }) {

  const { title, body } = children;
  return (
    <S.Hero>
      <S.Image />
      <S.Copy>
        <S.Title>{title}</S.Title>
        <S.Body>{body}</S.Body>
      </S.Copy>
    </S.Hero>
  )
}

export default ImageHero

ImageHero.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
}
