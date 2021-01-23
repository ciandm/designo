import React from 'react'
import PropTypes from 'prop-types'
import * as S from './IllustrationColumn.styled';

function IllustrationColumn({
  imageURL,
  imageAlt,
  gradientRotation,
  columnType,
  title,
  wrapsOnTablet,
  children
}) {

  return (
    <S.Column
      wrapsOnTablet={wrapsOnTablet}
      columnType={columnType}
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
        {React.Children.map(children, (child) => {
          if (child.type === 'p') {
            return (
              <S.Body
                wrapsOnTablet={wrapsOnTablet}
              >{child.props.children}</S.Body>
            )
          } else {
            return child;
          }
        })}
      </S.Content>
    </S.Column>
  )
}

export default IllustrationColumn

IllustrationColumn.propTypes = {
  imageURL: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  gradientRotation: PropTypes.string.isRequired,
  columnType: PropTypes.oneOf(['text', 'button']).isRequired,
  title: PropTypes.string.isRequired,
  wrapsOnTablet: PropTypes.bool,
  children: PropTypes.node,
}