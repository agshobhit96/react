import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"; 

describe("Contact page test cases", () => {

    test("Shoud render Contact component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("Shoud load submit button", () => {
        render(<Contact />);
    
        const btn = screen.getByText("Submit");
    
        expect(btn).toBeInTheDocument();
    });
    
    test("Shoud load Query Input Boxxx", () => {
        render(<Contact />);
    
        const ip = screen.getByPlaceholderText("Query");
    
        expect(ip).toBeInTheDocument();
    });
 });
