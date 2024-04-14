import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import AppLayout from './AppLayout.tsx';
import App from './App.tsx';
import MeetingLayout from './MeetingLayout.tsx';
import Meeting from './Meeting.tsx';
import MeetingNoId from './MeetingNoId.tsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <App />,
        },
        {
          path: "/test2",
          element: <App />,
        },
      ]
    },
    {
      path: "/meeting",
      element: <MeetingLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MeetingNoId />,
        },
        {
          path: "/meeting/:meetingId",
          element: <Meeting />,
        }
      ]
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

// document.body.style.backgroundColor = `${dark.bgColor}`;
document.body.classList.add('bg-dark-2');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
