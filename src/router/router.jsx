import { createBrowserRouter } from "react-router-dom";

import { CartPage, HomePage, LoginPage, RegisterPage } from "../pages";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/auth/login',
        element: <LoginPage />
    },
    {
        path: '/auth/register',
        element: <RegisterPage />
    },
    {
        path: '/cart',
        element: <CartPage />
    }
])