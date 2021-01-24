import React from 'react'
import PropTypes from 'prop-types'
import * as S from './ViewProjectsCard.styled';

function ViewProjectsCard({
  projectTitle,
  ...restProps
}) {
  return (
    <S.Card
      {...restProps}
    >
      <S.Contents>
        <S.Title>{projectTitle}</S.Title>
        <S.Subtitle>View projects</S.Subtitle>
      </S.Contents>
    </S.Card>
  )
}

export default ViewProjectsCard


ViewProjectsCard.propTypes = {
  projectTitle: PropTypes.string.isRequired,
}