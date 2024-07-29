import { createBrowserRouter, Navigate } from "react-router-dom";
import TestLayoutFormPage from "./pages/TestLayoutFormPage";
import TestLayoutPage from "./pages/TestLayoutPage";
import TestSelectPage from "./pages/TestSelectPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/test-layout" replace />,
  },
  {
    path: "/test-layout",
    Component: TestLayoutPage,
  },
  {
    path: "/test-layout-form",
    Component: TestLayoutFormPage,
  },
  {
    path: "/test-select",
    Component: TestSelectPage,
  },
]);

export default router;
