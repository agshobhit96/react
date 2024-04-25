import React from "react";
import ReactDOM from "react-dom/client";

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

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/userupload/9902999/file/original-de06ad0905f8f51f1e1d0adbf2c4e538.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResCards = (properties) => {
    console.log(properties);
    const {resList} = properties;
    console.log(resList);
    const {name, location, rating, cuisine, delivery} = resList?.data; // Destructuring; const name = resList.data.name;
    console.log(name, location, rating, cuisine, delivery);
    return (
        <div className="res-cards">
            <img className="res-logo" src="https://www.tripsavvy.com/thmb/vvRp6pRHf1q_Nv51hl4u-Dqc2Sw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-913677156-3fca0dd4029849ab912cd48cfec4a4db.jpg" alt="res-image" />
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{cuisine}</p>
            <p>{rating} stars</p>
            <p>{delivery} mins</p>
           
        </div>
    )
};

const resItems = [
    {
        data: {
            name: "Restaurant 1",
            location: "Location 1",
            rating: 4,
            cuisine: "Cuisine 1",
            delivery: "36"
        }
    },
    {
        data: {
            name: "Restaurant 2",
            location: "Location 2",
            rating: 3,
            cuisine: "Cuisine 2",
            delivery: "45"
        }
    },
    {
        data: {
            name: "Restaurant 3",
            location: "Location 3",
            rating: 5,
            cuisine: "Cuisine 3",
            delivery: "30"
        }
    },
    { 
        data: {
            name: "Restaurant 4",
            location: "Location 4",
            rating: 2,
            cuisine: "Cuisine 4",
            delivery: "50"
        }   
    },
    {
        data: {
            name: "Restaurant 5",
            location: "Location 5",
            rating: 4,
            cuisine: "Cuisine 5",
            delivery: "40"
        }
    },
    {
        data: {
            name: "Restaurant 6",
            location: "Location 6",
            rating: 3,
            cuisine: "Cuisine 6",
            delivery: "35"
        }
    },
    {
        data: {
            name: "Restaurant 7",
            location: "Location 7",
            rating: 5,
            cuisine: "Cuisine 7",
            delivery: "25"
        }
    },
    {
        data: {
            name: "Restaurant 8",
            location: "Location 8",
            rating: 2,
            cuisine: "Cuisine 8",
            delivery: "55"
        }
    },
    {
        data: {
            name: "Restaurant 9",
            location: "Location 9",
            rating: 4,
            cuisine: "Cuisine 9",
            delivery: "38"
        }
    },
    {
        data: {
            name: "Restaurant 10",
            location: "Location 10",
            rating: 3,
            cuisine: "Cuisine 10",
            delivery: "42"
        }
    },
    {
        data: {
            name: "Restaurant 11",
            location: "Location 11",
            rating: 5,
            cuisine: "Cuisine 11",
            delivery: "28"
        }
    },
    {
        data: {
            name: "Restaurant 12",
            location: "Location 12",
            rating: 2,
            cuisine: "Cuisine 12",
            delivery: "60"
        }
    }
];

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
            <div className="cards-container">
                {
                    resItems.map((item, index) => {
                        return (
                            <ResCards key={index} resList={item}/>
                        );
                    })
                }
            </div>

        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
            {/* <FooterComponent /> */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);