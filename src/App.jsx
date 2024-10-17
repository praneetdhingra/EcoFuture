import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/Layout/Layout";
import Home from "./components/shared/Home/Home";
import SignIn from "./components/shared/SignIn/SignIn";
import SignUp from "./components/shared/SignUp/SignUp";
import AuthLayout from "./components/shared/Layout/AuthLayout/AuthLayout";
import Redirection from "./components/shared/Redirection/Redirection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/*",
    element: <Layout />,
    children:[
      {
        path: "*",
        element: <Redirection />,
      }
    ]
    
  }
]);

function App() {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
