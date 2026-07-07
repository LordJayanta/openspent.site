import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Index from "./pages/home/Index";
import Legal from "./pages/legal/Legal";

const router = createHashRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/:slug",
    element: < Legal />,
  },
], {
  basename: import.meta.env.NODE_ENV === 'production' ? '/openspent.site' : '/',
});

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
