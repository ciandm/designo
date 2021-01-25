import React from 'react';
import PropTypes from 'prop-types'
import * as S from './MapCard.styled';

function MapCard({ children, flipped }) {

  const {
    title,
    location,
    contact,
    mapImages
  } = children

  console.log(mapImages);
  return (
    <S.Wrapper>
      <S.Card>
        <S.Image
          flipped={flipped}
          images={mapImages}
        />
        <S.Content>
          <S.Title>{title}</S.Title>
          {
            location &&
            <S.List>
              {location.map(item => (
                <S.Item>{item}</S.Item>
              ))}
            </S.List>
          }
          {
            contact &&
            <S.List>
              {contact.map(item => (
                <S.Item>{item}</S.Item>
              ))}
            </S.List>
          }
        </S.Content>
      </S.Card>
    </S.Wrapper>
  )
}

export default MapCard

MapCard.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.array,
    contact: PropTypes.array,
    mapImages: PropTypes.object,
  }),
  flipped: PropTypes.bool,
}