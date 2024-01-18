import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import defaultRoutes from "./defaultRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      ...defaultRoutes.map(({ path, Component }) => ({
        path,
        element: <Component />,
      })),
    ],
  },
]);

export default router