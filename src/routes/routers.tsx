import { RouteObject, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Partners from "../pages/Partners";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Skill from "../pages/Skill";

const routes: RouteObject[] = [ 
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/skill", element: <Skill />},
      {path: "/partners", element: <Partners />},
      {path: "/service", element: <Service />},
      {path: "/contact", element: <Contact />},
    ]
  }
]

const router = createBrowserRouter(routes);

export default router;
