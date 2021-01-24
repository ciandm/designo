import ROUTES from '../routes/routes';

const viewProjectsData = [
  {
    id: "web_design",
    projectTitle: "Web Design",
    route: ROUTES.WEB_DESIGN,
  },
  {
    id: "graphic_design",
    projectTitle: "Graphic Design",
    route: ROUTES.GRAPHIC_DESIGN,
  },
];

const designCardsData = [
  {
    id: "airfilter",
    image: require('../../../assets/app-design/desktop/image-airfilter.jpg').default,
    title: "Airfilter",
    subtitle: "Solving the problem of poor indoor air quality by filtering the air"
  },
  {
    id: "eyecam",
    image: require('../../../assets/app-design/desktop/image-eyecam.jpg').default,
    title: "Eyecam",
    subtitle: "Product that lets you edit your favorite photos and videos at any time"
  },
  {
    id: "faceit",
    image: require('../../../assets/app-design/desktop/image-faceit.jpg').default,
    title: "Faceit",
    subtitle: "Get to meet your favorite internet superstar with the faceit app"
  },
  {
    id: "todo",
    image: require('../../../assets/app-design/desktop/image-todo.jpg').default,
    title: "Todo",
    subtitle: "A todo app that features cloud sync with light and dark mode"
  },
  {
    id: "loopstudios",
    image: require('../../../assets/app-design/desktop/image-loopstudios.jpg').default,
    title: "Loopstudios",
    subtitle: "A VR experience app made for Loopstudios"
  }
]

export {
  viewProjectsData,
  designCardsData
}