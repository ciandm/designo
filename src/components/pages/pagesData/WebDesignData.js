import ROUTES from '../routes/routes';

const viewProjectsData = [
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
];

const designCardsData = [
  {
    id: "express",
    image: require('../../../assets/web-design/desktop/image-express.jpg').default,
    title: "Express",
    subtitle: "A multi-carrier shipping website for ecommerce businesses"
  },
  {
    id: "transfer",
    image: require('../../../assets/web-design/desktop/image-transfer.jpg').default,
    title: "Transfer",
    subtitle: "Site for low-cost money transfers and sending money within seconds"
  },
  {
    id: "photon",
    image: require('../../../assets/web-design/desktop/image-photon.jpg').default,
    title: "Photon",
    subtitle: "A state-of-the-art music player with high-resolution audio and DSP effects"
  },
  {
    id: "builder",
    image: require('../../../assets/web-design/desktop/image-builder.jpg').default,
    title: "Builder",
    subtitle: "Connects users with local contractors based on their location"
  },
  {
    id: "blogr",
    image: require('../../../assets/web-design/desktop/image-blogr.jpg').default,
    title: "Blogr",
    subtitle: "Blogr is a platform for creating an online blog or publication"
  },
  {
    id: "camp",
    image: require('../../../assets/web-design/desktop/image-camp.jpg').default,
    title: "Camp",
    subtitle: "Get expert training in coding, data, design, and digital marketing"
  }
]

export {
  viewProjectsData,
  designCardsData
}