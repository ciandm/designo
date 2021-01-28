import React from 'react';
import PropTypes from 'prop-types'
import * as S from './MapCard.styled';
import Map from './Map/Map';

function MapCard({ children, flipped }) {

  const {
    position,
    title,
    location,
    contact,
  } = children

  return (
    <S.Wrapper>
      <S.Card>
        <S.Map
          flipped={flipped}
        >
          <Map
            position={position}
          />
        </S.Map>
        <S.Content>
          <S.Title>{title}</S.Title>
          {
            location &&
            <S.List>
              {location.map((item, index) => (
                <S.Item
                  key={index}
                >{item}</S.Item>
              ))}
            </S.List>
          }
          {
            contact &&
            <S.List>
              {contact.map((item, index) => (
                <S.Item
                  key={index}
                >{item}</S.Item>
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
    position: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.array,
    contact: PropTypes.array,
    mapImages: PropTypes.object,
  }),
  flipped: PropTypes.bool,
}