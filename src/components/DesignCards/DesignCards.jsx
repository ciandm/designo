import React from 'react'
import * as S from './DesignCards.styled';

function DesignCards({ cardsData }) {
  return (
    <S.Container>
      {
        cardsData.map(card => (
          <S.Card
            key={card.id}
          >
            <S.Image
              image={card.image}
            />
            <S.Details>
              <S.Title>{card.title}</S.Title>
              <S.Subtitle>{card.subtitle}</S.Subtitle>
            </S.Details>
          </S.Card>
        ))
      }
    </S.Container>
  )
}

export default DesignCards
