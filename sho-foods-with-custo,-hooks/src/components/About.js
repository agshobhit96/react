import Member from "./Member";
import MemberClass from "./MemberClass";

const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <div>About this app</div>
            <Member name="Shobhit (from function)" age="28" location={"Bangalore"} />
            <MemberClass name="Shobhit (from class)" age="28" location={"Bangalore"} />
        </div>
        
    );
}

export default About;