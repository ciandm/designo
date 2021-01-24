import React from 'react'
import PropTypes from 'prop-types'
import ViewProjectsCard from './ViewProjectCard/ViewProjectsCard';
import * as S from './ViewProjects.styled';

function ViewProjects({
  smallerMarginY,
  projectsData
}) {
  return (
    <S.Container
      smallerMarginY={smallerMarginY}
    >
      <S.Grid>
        {
          projectsData.map(c => (
            <ViewProjectsCard
              key={c.id}
              id={c.id}
              projectTitle={c.projectTitle}
              rowSpan={c.rowSpan}
              to={c.route}
            />
          ))
        }
      </S.Grid>
    </S.Container>
  )
}

export default ViewProjects

ViewProjects.propTypes = {
  smallerMarginY: PropTypes.bool,
  projectsData: PropTypes.array.isRequired,
}
