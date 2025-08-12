import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "../pages/Home";
// import Features from "../pages/Features";
// import Pricing from "../pages/Pricing";
// import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            //   { index: true, element: <Home /> },
            //   { path: "features", element: <Features /> },
            //   { path: "pricing", element: <Pricing /> },
            //   { path: "contact", element: <Contact /> },
        ],
    },
]);
