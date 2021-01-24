import React from 'react'
import ThemeProvider from '../../theme/ThemeProvider';
import {
  viewProjectsData,
  designCardsData
} from './pagesData/GraphicDesignData'

// components
import Nav from '../common/Nav/Nav';
import Footer from '../common/Footer/Footer';
import DesignHero from '../DesignHero/DesignHero';
import ViewProjects from '../ViewProjects/ViewProjects';
import DesignCards from '../DesignCards/DesignCards';
import LeafPattern from '../common/LeafPattern/LeafPattern';

function GraphicDesign() {
  return (
    <ThemeProvider>
      <Nav />
      <DesignHero
        title="Grapic Design">
        We deliver eye-catching branding materials that are
        tailored to meet your business objectives.
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

export default GraphicDesign
