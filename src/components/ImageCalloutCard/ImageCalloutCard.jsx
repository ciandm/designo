import React from 'react'
import PropTypes from 'prop-types'
import * as S from './ImageCalloutCard.styled';

function ImageCalloutCard({ children, ...rest }) {

  const {
    imageURL,
    imageAlt,
    title,
    paragraphs
  } = children

  return (
    <S.Container
      {...rest}
    >
      <S.Wrapper>
        <S.Picture>
          <source
            srcSet={`${imageURL.mobile} 300w, ${imageURL.tablet} 480w, ${imageURL.desktop} 1032w,`}
          >
          </source>
          <img
            src={imageURL.default}
            alt={imageAlt}
          />
        </S.Picture>
        <S.Content>
          <S.Title>{title}</S.Title>
          {
            paragraphs && paragraphs.map((p, index) => (
              <S.Body
                key={index}
              >{p}</S.Body>
            ))
          }
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default ImageCalloutCard

ImageCalloutCard.propTypes = {
  children: PropTypes.shape({
    imageURL: PropTypes.shape({
      default: PropTypes.string.isRequired,
      mobile: PropTypes.string,
      tablet: PropTypes.string,
      desktop: PropTypes.string,
    }),
    imgAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.array,
  }),
}