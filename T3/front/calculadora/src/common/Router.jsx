import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage/MainPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <MainPage /> }],
    },
    {
      path: "*",
      loader: () => {
        return redirect("/");
      },
    },
  ]);

  return <RouterProvider router={router} />;
}
