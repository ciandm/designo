import React, { useEffect } from 'react'
import ThemeProvider from '../../theme/ThemeProvider';
import {
  viewProjectsData,
  designCardsData
} from './pagesData/WebDesignData'

// components
import Nav from '../common/Nav/Nav';
import Footer from '../common/Footer/Footer';
import DesignHero from '../DesignHero/DesignHero';
import ViewProjects from '../ViewProjects/ViewProjects';
import DesignCards from '../DesignCards/DesignCards';

function WebDesign() {

  return (
    <ThemeProvider>
      <Nav />
      <DesignHero
        title="Web Design">
        We build websites that serve as powerful marketing tools and bring memorable brand experiences.
      </DesignHero>
      <DesignCards
        cardsData={designCardsData}
      />
      <ViewProjects
        smallerMarginY={true}
        projectsData={viewProjectsData}
      />
      <Footer />
    </ThemeProvider>
  )
}

export default WebDesign
