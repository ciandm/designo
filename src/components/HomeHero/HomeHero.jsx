import React from 'react'
import * as S from './HomeHero.styled'
import Button from '../Button/Button'

function HomeHero() {
  return (
    <S.Wrapper>
      <S.Intro>
        <S.Headline>
          Award-winning custom designs and digital branding solutions
        </S.Headline>
        <S.Subheading>
          With over 10 years in the industry, we are experienced in creating fully responsive websites, apps, and engaging brand experiences. Find out more about our services.
        </S.Subheading>
        <Button
          variation="white"
        >Learn more</Button>
      </S.Intro>
      <S.PhoneContainer>
      </S.PhoneContainer>
    </S.Wrapper>
  )
}

export default HomeHero
