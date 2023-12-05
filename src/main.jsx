import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx"
import Login from "./components/Login.jsx";
import App from "./components/App.jsx";
import "./index.css";
import { SignUp } from "./components/SignUp.jsx";
import { Courses } from "./components/Courses.jsx";
import { Subscription } from "./components/Subscription.jsx";




const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App/>
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact/>
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/signup",
    element:<SignUp/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/courses",
    element: (
      <>
        <Navbar />
        <Courses/>
        <Footer />
      </>
    ),
    errorElement:<ErrorPage/>
  },
  {
    path:"/subscription",
    element: (
      <>
        <Navbar />
        <Subscription/>
        <Footer />
      </>
    ),
    errorElement:<ErrorPage/>
  },
  // {
  //   path:"/loading",
  //   element: (
  //     <>

        
  //       <Loading/>
      
  //     </>
  //   ),
  //   errorElement:<ErrorPage/>
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
