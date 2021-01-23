import React from 'react'
import ThemeProvider from '../../theme/ThemeProvider';
// Components
import Nav from '../Nav/Nav';
import ViewProjects from '../ViewProjects/ViewProjects';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import IllustrationColumns from '../IllustrationColumns/IllustrationColumns';
import IllustrationColumn from '../IllustrationColumns/IllustrationColumn/IllustrationColumn';
// Web Design images
import imageWebDesignMobile from '../../assets/home/mobile/image-web-design.jpg';
import imageWebDesignTablet from '../../assets/home/tablet/image-web-design.jpg';
import imageWebDesignDesktop from '../../assets/home/desktop/image-web-design-large.jpg';
// App Design images
import imageAppDesignMobile from '../../assets/home/mobile/image-app-design.jpg';
import imageAppDesignTablet from '../../assets/home/tablet/image-app-design.jpg';
import imageAppDesignDesktop from '../../assets/home/desktop/image-app-design.jpg';
// Graphic Design images
import imageGraphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg';
import imageGraphicDesignTablet from '../../assets/home/tablet/image-graphic-design.jpg';
import imageGraphicDesignDesktop from '../../assets/home/desktop/image-graphic-design.jpg';
// Illustrations
import passionateIllustration from '../../assets/home/desktop/illustration-passionate.svg';
import resourcefulIllustration from '../../assets/home/desktop/illustration-resourceful.svg';
import friendlyIllustration from '../../assets/home/desktop/illustration-friendly.svg';


function Home() {

  const viewProjectsData = [
    {
      id: "web-design",
      backgroundImages: {
        mobile: imageWebDesignMobile,
        tablet: imageWebDesignTablet,
        desktop: imageWebDesignDesktop
      },
      projectTitle: "Web Design",
      // spans 2 rows on desktop
      gridRow: 'span 2'
    },
    {
      id: "app-design",
      backgroundImages: {
        mobile: imageAppDesignMobile,
        tablet: imageAppDesignTablet,
        desktop: imageAppDesignDesktop
      },
      projectTitle: "App Design"
    },
    {
      id: "graphic-design",
      backgroundImages: {
        mobile: imageGraphicDesignMobile,
        tablet: imageGraphicDesignTablet,
        desktop: imageGraphicDesignDesktop
      },
      projectTitle: "Graphic Design"
    },
  ]

  return (
    <ThemeProvider>
      <Nav />
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
      <Footer />
    </ThemeProvider>
  )
}

export default Home
