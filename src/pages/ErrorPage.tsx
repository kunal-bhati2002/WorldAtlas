import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center text-center min-h-[80vh] px-4">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-red-500">
                OOPS!!! An error has occurred.
            </h1>

            <p className="text-gray-400 text-sm sm:text-base mb-6">
                {(error as { data?: string })?.data ?? "An unexpected error occurred."}
            </p>

            <NavLink to="/">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-all duration-200">
                    Go To Home
                </button>
            </NavLink>
        </div>
    );
}

export default ErrorPage;
