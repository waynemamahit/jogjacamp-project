import { createBrowserRouter, Navigate } from "react-router-dom";
import TestLayoutFormPage from "./pages/TestLayoutFormPage";
import TestLayoutPage from "./pages/TestLayoutPage";
import TestSelectPage from "./pages/TestSelectPage";
import MainLayout from "./components/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/test-layout" replace />,
  },
  {
    element: <MainLayout />,
    children: [
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
    ]
  }
]);

export default router;
