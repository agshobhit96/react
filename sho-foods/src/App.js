import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import ResMenu from "./components/ResMenu";

/*
** Header
    - Logo
    - Nav Items
** Body
    - Search
    - Cards-container
** Footer
    - Social Links
    - Contact Us
*/


const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Outlet />
            {/* <FooterComponent /> */}
        </div>
    );
};

// const appRoutes = createBrowserRouter(
//     [
//         {
//             path: '/',
//             element: <AppLayout />,
//             errorElement: <ErrorPage />
//         },
//         {
//             path: 'about',
//             element: <About />
//         },
//         {
//             path: 'contact',
//             element: <Contact />
//         }

//     ]
// );

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <BodyComponent />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'restaurant/:resId',
                element: <ResMenu />
            }
        ],
        errorElement: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);