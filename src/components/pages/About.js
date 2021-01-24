import React from 'react'

//components
import Nav from '../common/Nav/Nav';
import ThemeProvider from '../../theme/ThemeProvider';
import ImageHero from '../ImageHero/ImageHero';
import Footer from '../common/Footer/Footer';
import LeafPattern from '../common/LeafPattern/LeafPattern';
import IllustrationColumns from '../IllustrationColumns/IllustrationColumns';
import IllustrationColumn from '../IllustrationColumns/IllustrationColumn/IllustrationColumn';
import Button from '../common/Button/Button';
import ImageCalloutCard from '../ImageCalloutCard/ImageCalloutCard';
import { Link } from 'react-router-dom';
import ROUTES from './routes/routes';

// illustrations
import australiaIllustration from '../../assets/shared/desktop/illustration-australia.svg';
import canadaIllustration from '../../assets/shared/desktop/illustration-canada.svg';
import ukIllustration from '../../assets/shared/desktop/illustration-united-kingdom.svg';

function About() {
  return (
    <ThemeProvider>
      <Nav />
      <ImageHero>
        {{
          title: "About Us",
          body: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
        }}
      </ImageHero>
      <LeafPattern
        top={475}
      />
      <ImageCalloutCard
        removeMarginTop={true}
      >
        {{
          imageURL: {
            default: require('../../assets/about/mobile/image-world-class-talent.jpg').default,
            desktop: require('../../assets/about/desktop/image-world-class-talent.jpg').default,
            tablet: require('../../assets/about/tablet/image-world-class-talent.jpg').default,
            mobile: require('../../assets/about/mobile/image-world-class-talent.jpg').default,
          },
          imageAlt: "Woman viewing paintings, admiring the world-class talent",
          title: "World-class talent",
          paragraphs: ['We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.', 'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.']
        }}
      </ImageCalloutCard>
      <IllustrationColumns>
        <IllustrationColumn
          title="Canada"
          imageURL={canadaIllustration}
          imageAlt="Canada illustration"
          gradientRotation="-90deg"
          columnContent="button"
        >
          {{
            title: "Canada",
            body: (
              <Button
                variation="peach"
                as={Link}
                to={ROUTES.LOCATIONS}
              >See location</Button>
            )
          }}
        </IllustrationColumn>
        <IllustrationColumn
          title="Australia"
          imageURL={australiaIllustration}
          imageAlt="Australia illustration"
          gradientRotation="180deg"
          columnContent="button"
        >
          {{
            title: "Australia",
            body: (
              <Button
                variation="peach"
                as={Link}
                to={ROUTES.LOCATIONS}
              >See location</Button>
            )
          }}
        </IllustrationColumn>
        <IllustrationColumn
          title="United Kingdom"
          imageURL={ukIllustration}
          imageAlt="United Kingdom illustration"
          gradientRotation="90deg"
          columnContent="button"
        >
          {{
            title: "United Kingdom",
            body: (
              <Button
                variation="peach"
                as={Link}
                to={ROUTES.LOCATIONS}
              >See location</Button>
            )
          }}
        </IllustrationColumn>
      </IllustrationColumns>
      <ImageCalloutCard>
        {{
          imageURL: {
            default: require('../../assets/about/mobile/image-real-deal.jpg').default,
            desktop: require('../../assets/about/desktop/image-real-deal.jpg').default,
            tablet: require('../../assets/about/tablet/image-real-deal.jpg').default,
            mobile: require('../../assets/about/mobile/image-world-class-talent.jpg').default,
          },
          imageAlt: "Woman hanging painting, created by world-class artists",
          title: "The real deal",
          paragraphs: [`As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.`, 'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.']
        }}
      </ImageCalloutCard>
      <LeafPattern
        top={1780}
        left={830}
      />
      <Footer />
    </ThemeProvider>
  )
}

export default About
