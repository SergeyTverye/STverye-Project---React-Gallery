import Gallery from "../Components/Gallery";
import About from "../Components/About";
import React from "react";
import Login from "../Components/Login";
import GuestBook from "../Components/GuestBook";

export const publicRoutes = [
    {
        path: '/',
        element: <Gallery/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/login',
        element: <Login/>
    },
]


export const privateRoutes = [
    {
        path: '/guestbook',
        element: <GuestBook/>
    },
    {
        path: '/',
        element: <Gallery/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/login',
        element: <Login/>
    },
]