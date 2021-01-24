import React from 'react'
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
import LeafPattern from '../common/LeafPattern/LeafPattern';

function WebDesign() {
  return (
    <ThemeProvider>
      <Nav />
      <DesignHero>
        {{
          title: "Web Design",
          subtitle: "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }}
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

export default WebDesign
