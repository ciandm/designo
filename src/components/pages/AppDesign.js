import React from 'react'
import ThemeProvider from '../../theme/ThemeProvider';
import {
  viewProjectsData,
  designCardsData
} from './pagesData/AppDesignData'

// components
import Nav from '../common/Nav/Nav';
import Footer from '../common/Footer/Footer';
import DesignHero from '../DesignHero/DesignHero';
import ViewProjects from '../ViewProjects/ViewProjects';
import DesignCards from '../DesignCards/DesignCards';
import LeafPattern from '../common/LeafPattern/LeafPattern';

function AppDesign() {
  return (
    <ThemeProvider>
      <Nav />
      <DesignHero
        title="App Design">
        Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips.
      </DesignHero>
      <LeafPattern
        top={280}
      />
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

export default AppDesign
