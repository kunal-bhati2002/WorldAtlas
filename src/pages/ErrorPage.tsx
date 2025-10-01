import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="text-center my-16">
            <h1>OOPS!!! an error has occured.</h1>
            {/* <p>{error.data}</p> */}
            <p>{(error as { data?: string })?.data ?? "An unexpected error occurred."}</p>
            <NavLink to="/"> <button className="bg-gray-600 px-3 py-1 m-5 rounded-md"> Go To Home</button></NavLink>
        </div>);
}

export default ErrorPage