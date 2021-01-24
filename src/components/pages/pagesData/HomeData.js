import ROUTES from '../routes/routes';

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

export {
  viewProjectsData
};