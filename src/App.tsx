import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./layouts/Main";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "/courses", element: <Courses /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
