import { Outlet, createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import AuthProvider from "../context/AuthProvider.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const AuthLayout = () => {
    return <AuthProvider>
        <Outlet/>
    </AuthProvider>
}

export default createBrowserRouter([
    {
        element: <AuthLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <Login/>,
                path: '/login'
            },
            {
                element: <ProtectedRoute/>,
                children: [
                    {
                        element: <Home/>,
                        path: '/'
                    },
                ]
            },
        ]
    }
])