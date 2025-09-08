import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/authentication/SignUp";
import LandingPage from "../pages/LandingPage";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "signup", element: <SignUp /> },
            //   { index: true, element: <Home /> },
            //   { path: "features", element: <Features /> },
            //   { path: "pricing", element: <Pricing /> },
            //   { path: "contact", element: <Contact /> },
        ],
    },
]);
