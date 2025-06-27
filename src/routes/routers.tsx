import { RouteObject, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
// import About from "../pages/About";
import Roadmap from "../pages/Roadmap";
import Partners from "../pages/Partners";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Skill from "../pages/Skill";
import KeyFeatures from "../pages/KeyFeatures";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/roadmap", element: <Roadmap /> },
      { path: "/skill", element: <Skill /> },
      { path: "/partners", element: <Partners /> },
      { path: "/service", element: <Service /> },
      { path: "/contact", element: <Contact /> },
      { path: "/keyfeatures", element: <KeyFeatures /> },
    ]
  }
]

const router = createBrowserRouter(routes);

export default router;
