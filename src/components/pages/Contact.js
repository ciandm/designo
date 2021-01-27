import React from 'react'

//components
import Nav from '../common/Nav/Nav';
import ThemeProvider from '../../theme/ThemeProvider';
import Footer from '../common/Footer/Footer';
import Form from '../Form/Form';
import LeafPattern from '../common/LeafPattern/LeafPattern';
import IllustrationColumns from '../IllustrationColumns/IllustrationColumns';
import IllustrationColumn from '../IllustrationColumns/IllustrationColumn/IllustrationColumn';
import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';
import ROUTES from './routes/routes';

// illustrations
import australiaIllustration from '../../assets/shared/desktop/illustration-australia.svg';
import canadaIllustration from '../../assets/shared/desktop/illustration-canada.svg';
import ukIllustration from '../../assets/shared/desktop/illustration-united-kingdom.svg';

function Contact() {
  return (
    <ThemeProvider>
      <Nav />
      <Form />
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
      <Footer
        letsTalkRemoved={true}
      />

    </ThemeProvider>
  )
}

export default Contact
