import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children:[
            { index:true, element: <HomePage />},
            { path: "events", element: <EventsPage />},
            { path: "events/new", element: <NewEventPage />},
            { path: "events/:id", element: <EventDetailPage />},
            { path: "events/:id/edit", element: <EditEventPage />},
            { path: "*", element: <ErrorPage />},
    ]},
   
    
     
     
     
]);

function App () {
    return <RouterProvider router={router}></RouterProvider>};

export default App;