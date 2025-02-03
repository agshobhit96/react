import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/UserContext";

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
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Api call
        // response from API
        const res = {
            name: "Shobhit"
        }
        setUserName(res.name);
    },[])
    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <HeaderComponent />
                <Outlet />
                {/* <FooterComponent /> */}
            </div>
        </UserContext.Provider>
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

const Grocery = lazy(() => import("./components/Grocery"));

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
                path: 'grocery',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                )
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