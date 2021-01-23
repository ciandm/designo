import React from 'react'
import PropTypes from 'prop-types'
import ViewProjectsCard from './ViewProjectCard/ViewProjectsCard';
import * as S from './ViewProjects.styled';

function ViewProjects({
  grid,
  projectsData
}) {
  return (
    <S.Container>
      <S.Grid>
        {
          projectsData.map(c => (
            <ViewProjectsCard
              key={c.id}
              backgroundImages={c.backgroundImages}
              projectTitle={c.projectTitle}
              gridRow={c.gridRow}
            />
          ))
        }
      </S.Grid>
    </S.Container>
  )
}

export default ViewProjects

ViewProjects.propTypes = {
  projectsData: PropTypes.array.isRequired,
}
