import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Profile from "./Components/Profile.jsx";
import Cart from "./Components/Cart.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Home.jsx";
import ThemeContext from "./Components/ContextStores/ThemeContext.jsx";
import { Provider } from "react-redux";
import Store from "./Store/Store.js";

// import SkeletionUI from "./Components/Skeletons/SkeletionUI.jsx";
let AllCategoryPage = lazy(() => import("./Components/AllCategoryPage.jsx"));
let CategoryProducts = lazy(() => import("./Components/CategoryProducts.jsx"));
let ProductPage = lazy(() => import("./Components/ProductPage.jsx"));
let FoodApp = lazy(() => import("./Components/FoodApp.jsx"));
let ThankYouPage = lazy(() => import("./Components/ThankYourPage.jsx"));
let ViewYourOrdersPage = lazy(() => import("./Components/OrderHistory.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<h1>Product Page Loading...</h1>}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/all-categories",
        element: (
          <Suspense fallback={<h1>All Category Page Loading...</h1>}>
            <AllCategoryPage />
          </Suspense>
        ),
      },
      {
        path: "/category/:category",
        element: (
          <Suspense fallback={<h1> Category Product Page is Loading...</h1>}>
            <CategoryProducts />
          </Suspense>
        ),
      },
      {
        path: "/order-food",
        element: (
          <Suspense fallback={<h1>Hello Food App</h1>}>
            <FoodApp />
          </Suspense>
        ),
      },
      {
        path: "/thank-You",
        element: (
          <Suspense fallback={<h1>Thank You Page Loading</h1>}>
            <ThankYouPage />
          </Suspense>
        ),
      },
      {
        path: "/order-history",
        element: (
          <Suspense fallback={<h1>Thank You Page Loading</h1>}>
            <ViewYourOrdersPage />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <ThemeContext>
      <RouterProvider router={appRouter} />
    </ThemeContext>
  </Provider>
);
