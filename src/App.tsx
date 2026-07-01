import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Index from "./pages/home/Index";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
