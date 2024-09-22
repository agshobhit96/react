import { useState } from "react";

const Member = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="memberCard">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <div>{props.location}</div> 
            <div>email</div>
            <div>count: {count} count1: {count2}</div>
        </div>
    );
}

export default Member;