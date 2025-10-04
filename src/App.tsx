import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import { AppLayout } from "./components/layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./components/layouts/CountryDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/country/:id",
          element: <CountryDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App