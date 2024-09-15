import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Error</h1>
            <h2>Something went wrong</h2>
            <p>{err.statusText}</p>
        </div>
    );
}

export default ErrorPage;