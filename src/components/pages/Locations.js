import React from 'react'

//components
import Nav from '../common/Nav/Nav';
import ThemeProvider from '../../theme/ThemeProvider';
import MapCard from '../MapCard/MapCard';
import Footer from '../common/Footer/Footer';

function Locations() {
  return (
    <ThemeProvider>
      <Nav />
      <MapCard>
        {{
          position: [43.64422875283527, -79.3945077461587],
          title: "Canada",
          location: [
            'Designo Central Office',
            '3886 Wellington Street',
            'Toronto, Ontario M9C 3J5'
          ],
          contact: [
            'Contact',
            'P : +1 253-863-8967',
            'M : contact@designo.co'
          ],
          mapImages: {
            desktop: require('../../assets/locations/desktop/image-map-canada.png').default,
            tablet: require('../../assets/locations/tablet/image-map-canada.png').default
          }
        }}
      </MapCard>
      <MapCard
        flipped={true}
      >
        {{
          position: [-30.32917623071111, 149.78827208472495],
          title: "Australia",
          location: [
            'Designo AU Office',
            '19 Balonne Street',
            'New South Wales 2443'
          ],
          contact: [
            'Contact',
            'P : (02) 6720 9092',
            'M : contact@designo.au'
          ],
          mapImages: {
            desktop: require('../../assets/locations/desktop/image-map-australia.png').default,
            tablet: require('../../assets/locations/tablet/image-map-australia.png').default
          }
        }}
      </MapCard>
      <MapCard>
        {{
          position: [51.732246845237306, -3.8620000766752325],
          title: "United Kingdom",
          location: [
            'Designo UK Office',
            '13 Colorado Way',
            'Rhyd-y-fro SA8 9GA'
          ],
          contact: [
            'Contact',
            'P : 078 3115 1400',
            'M : contact@designo.uk'
          ],
          mapImages: {
            desktop: require('../../assets/locations/desktop/image-map-united-kingdom.png').default,
            tablet: require('../../assets/locations/tablet/image-map-uk.png').default
          }
        }}
      </MapCard>
      <Footer />
    </ThemeProvider>
  )
}

export default Locations
