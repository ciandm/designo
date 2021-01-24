import React from 'react'
import ThemeProvider, { useWindowSize } from '../../theme/ThemeProvider';
import ROUTES from './routes/routes';
// Components
import Nav from '../common/Nav/Nav';
import HomeHero from '../HomeHero/HomeHero';
import ViewProjects from '../ViewProjects/ViewProjects';
import LeafPattern from '../common/LeafPattern/LeafPattern';
import Button from '../common/Button/Button';
import Footer from '../common/Footer/Footer';
import IllustrationColumns from '../IllustrationColumns/IllustrationColumns';
import IllustrationColumn from '../IllustrationColumns/IllustrationColumn/IllustrationColumn';

// Illustrations
import passionateIllustration from '../../assets/home/desktop/illustration-passionate.svg';
import resourcefulIllustration from '../../assets/home/desktop/illustration-resourceful.svg';
import friendlyIllustration from '../../assets/home/desktop/illustration-friendly.svg';


function Home() {
  const viewProjectsData = [
    {
      id: "web_design",
      projectTitle: "Web Design",
      route: ROUTES.WEB_DESIGN,
      // spans 2 rows on desktop
      rowSpan: 'span 2'
    },
    {
      id: "app_design",
      projectTitle: "App Design",
      route: ROUTES.APP_DESIGN,
    },
    {
      id: "graphic_design",
      projectTitle: "Graphic Design",
      route: ROUTES.GRAPHIC_DESIGN,
    },
  ]

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
          title="Passionate"
          imageURL={passionateIllustration}
          imageAlt="Passionate illustration"
          gradientRotation="180deg"
          columnType="text"
          wrapsOnTablet={true}
        >
          <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
        </IllustrationColumn>
        <IllustrationColumn
          title="Resourceful"
          imageURL={resourcefulIllustration}
          imageAlt="Resourceful illustration"
          gradientRotation="90deg"
          columnType="text"
          wrapsOnTablet={true}
        >
          <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
        </IllustrationColumn>
        <IllustrationColumn
          title="Friendly"
          imageURL={friendlyIllustration}
          imageAlt="Friendly illustration"
          gradientRotation="-90deg"
          columnType="text"
          wrapsOnTablet={true}
        >
          <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
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
