import { render, screen, fireEvent } from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should render the Header component with login button", () => {

    // as we are calling thhis component in isolation, we need to add provider
    // For Link component we need to wrap it around BrowserRouter

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
        
);

    const loginbtn = screen.getByRole("button");

    expect(loginbtn).toBeInTheDocument();
});

it("should render the Header component with 0 cart items", () => {

    // as we are calling thhis component in isolation, we need to add provider
    // For Link component we need to wrap it around BrowserRouter

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
        
);

    const cartTxt = screen.getByText("Cart - (0)");

    expect(cartTxt).toBeInTheDocument();
});

it("should change login button to logout on click", () => {

    // as we are calling thhis component in isolation, we need to add provider
    // For Link component we need to wrap it around BrowserRouter

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
        
);

    const loginBtn = screen.getByRole("button", {name: "Sign In"});

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", {name: "Sign Out"});

    expect(logoutBtn).toBeInTheDocument();
});