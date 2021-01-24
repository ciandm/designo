import ROUTES from '../routes/routes';

const viewProjectsData = [
  {
    id: "app_design",
    projectTitle: "App Design",
    route: ROUTES.APP_DESIGN,
  },
  {
    id: "web_design",
    projectTitle: "Web Design",
    route: ROUTES.WEB_DESIGN,
  },
];

const designCardsData = [
  {
    id: "tim_brown",
    image: require('../../../assets/graphic-design/desktop/image-change.jpg').default,
    title: "Tim Brown",
    subtitle: "A book cover designed for Tim Brown’s new release, ‘Change’"
  },
  {
    id: "boxed_water",
    image: require('../../../assets/graphic-design/desktop/image-boxed-water.jpg').default,
    title: "Boxed Water",
    subtitle: "A simple packaging concept made for Boxed Water"
  },
  {
    id: "science",
    image: require('../../../assets/graphic-design/desktop/image-science.jpg').default,
    title: "Science!",
    subtitle: "A poster made in collaboration with the Federal Art Project"
  }
]

export {
  viewProjectsData,
  designCardsData
}