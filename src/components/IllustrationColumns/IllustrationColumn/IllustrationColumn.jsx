import React from 'react'
import PropTypes from 'prop-types'
import * as S from './IllustrationColumn.styled';

function IllustrationColumn({
  imageURL,
  imageAlt,
  gradientRotation,
  columnContent,
  wrapsOnTablet,
  children
}) {

  //
  const { title, body } = children;

  return (
    <S.Column
      wrapsOnTablet={wrapsOnTablet}
      columnContent={columnContent}
    >
      <S.ImageWrapper
        gradientRotation={gradientRotation}
        wrapsOnTablet={wrapsOnTablet}
      >
        <S.Image
          src={imageURL}
          alt={imageAlt}
        />
      </S.ImageWrapper>
      <S.Content
        wrapsOnTablet={wrapsOnTablet}
      >
        <S.Title
          wrapsOnTablet={wrapsOnTablet}
        >
          {title}
        </S.Title>
        {
          columnContent === 'text' ? (
            <S.Body>{body}</S.Body>
          ) : (
              body
            )
        }
      </S.Content>
    </S.Column>
  )
}

export default IllustrationColumn

IllustrationColumn.propTypes = {
  imageURL: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  gradientRotation: PropTypes.string.isRequired,
  columnContent: PropTypes.oneOf(['text', 'button']).isRequired,
  wrapsOnTablet: PropTypes.bool,
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.node,
  })
}