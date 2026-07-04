import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Index from "./pages/home/Index";
import Legal from "./pages/legal/Legal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/:slug",
    element: < Legal />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
