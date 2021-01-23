import React from 'react'
import * as S from './IllustrationColumns.styled';

function IllustrationColumns({ children }) {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}

export default IllustrationColumns
