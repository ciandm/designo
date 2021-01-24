import React from 'react'
import PropTypes from 'prop-types'
import * as S from './LeafPattern.styled';
import { useWindowSize } from '../../../theme/ThemeProvider';

const LeafPattern = ({
  left,
  right,
  top,
  rotation
}) => {

  const isDesktop = useWindowSize() > 1032;

  if (!isDesktop) return null;

  return (
    <S.LeafContainer
      left={left}
      right={right}
      top={top}
    >
      <S.Leaf
        rotation={rotation}
      />
    </S.LeafContainer>
  )
}

export default LeafPattern

LeafPattern.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
  top: PropTypes.number,
  rotation: PropTypes.number,
}