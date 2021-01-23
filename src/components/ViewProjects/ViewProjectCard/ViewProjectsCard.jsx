import React from 'react'
import PropTypes from 'prop-types'
import * as S from './ViewProjectsCard.styled';

function ViewProjectsCard({
  backgroundImages,
  projectTitle,
  ...restProps
}) {
  return (
    <S.Card
      backgroundImages={backgroundImages}
      {...restProps}
    >
      <S.Contents>
        <S.Title>{projectTitle}</S.Title>
        <S.Link>View projects</S.Link>
      </S.Contents>
    </S.Card>
  )
}

export default ViewProjectsCard


ViewProjectsCard.propTypes = {
  backgroundImages: PropTypes.object.isRequired,
  projectTitle: PropTypes.string.isRequired,
}