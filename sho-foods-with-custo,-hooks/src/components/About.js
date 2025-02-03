import Member from "./Member";
import MemberClass from "./MemberClass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const About = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>About us</h1>
            <div>About this app</div>
            <h3>User : {user.loggedInUser}</h3>
            <Member name="Shobhit (from function)" age="28" location={"Bangalore"} />
            <MemberClass name="Shobhit (from class)" age="28" location={"Bangalore"} />
        </div>
        
    );
}

export default About;