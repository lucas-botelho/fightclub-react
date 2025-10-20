import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/authentication/SignIn";
import LandingPage from "../pages/LandingPage";
import App from "../App";
import SignUp from "../pages/authentication/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "signin", element: <SignIn /> },
            { path: "signup", element: <SignUp /> },
            //   { index: true, element: <Home /> },
            //   { path: "features", element: <Features /> },
            //   { path: "pricing", element: <Pricing /> },
            //   { path: "contact", element: <Contact /> },
        ],
    },
]);
