import React from 'react'
import ThemeProvider, { useWindowSize } from '../../theme/ThemeProvider';
import ROUTES from './routes/routes';
// Components
import Nav from '../common/Nav/Nav';
import HomeHero from '../HomeHero/HomeHero';
import ViewProjects from '../ViewProjects/ViewProjects';
import LeafPattern from '../common/LeafPattern/LeafPattern';
import Footer from '../common/Footer/Footer';
import IllustrationColumns from '../IllustrationColumns/IllustrationColumns';
import IllustrationColumn from '../IllustrationColumns/IllustrationColumn/IllustrationColumn';

// data
import {
  viewProjectsData
} from './pagesData/HomeData';

// Illustrations
import passionateIllustration from '../../assets/home/desktop/illustration-passionate.svg';
import resourcefulIllustration from '../../assets/home/desktop/illustration-resourceful.svg';
import friendlyIllustration from '../../assets/home/desktop/illustration-friendly.svg';


function Home() {
  return (
    <ThemeProvider>
      <Nav />
      <HomeHero />
      <LeafPattern
        top={475}
      />
      <ViewProjects
        projectsData={viewProjectsData}
      />
      <IllustrationColumns>
        <IllustrationColumn
          imageURL={passionateIllustration}
          imageAlt="Passionate illustration"
          gradientRotation="180deg"
          columnContent="text"
          wrapsOnTablet={true}
        >
          {{
            title: "Passionate",
            body: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          }}
        </IllustrationColumn>
        <IllustrationColumn
          imageURL={resourcefulIllustration}
          imageAlt="Resourceful illustration"
          gradientRotation="90deg"
          columnContent="text"
          wrapsOnTablet={true}
        >
          {{
            title: "Resourceful",
            body: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          }}
        </IllustrationColumn>
        <IllustrationColumn
          imageURL={friendlyIllustration}
          imageAlt="Friendly illustration"
          gradientRotation="-90deg"
          columnContent="text"
          wrapsOnTablet={true}
        >
          {{
            title: "Friendly",
            body: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          }}
        </IllustrationColumn>
      </IllustrationColumns>
      <LeafPattern
        top={1820}
        rotation={180}
      />
      <Footer />
    </ThemeProvider>
  )
}

export default Home
