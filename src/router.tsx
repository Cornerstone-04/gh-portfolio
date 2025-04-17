import Layout from "@/components/layout/layout";
import Error404 from "@/pages/error-404";
import { Repositories } from "@/pages/repositories";
import { Repository } from "@/pages/repositories/repository";
import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      { path: "", element: <Home /> },
      { path: "repositories", element: <Repositories /> },
      { path: "repository/:id", element: <Repository /> },
    ],
  },
]);
