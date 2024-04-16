import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import AppLayout from './AppLayout.tsx';
import App from './App.tsx';

import MainLayout from './MainLayout.tsx';
import SignIn from './sign-in/index.tsx';
import SignUp from './sign-up/index.tsx';

import Upcoming from './Upcoming.tsx';
import Previous from './Previous.tsx';
import Recordings from './Recordings.tsx';
import PersonalRoom from './PersonalRoom.tsx';

import MeetingLayout from './MeetingLayout.tsx';
import Meeting from './Meeting.tsx';
import MeetingNoId from './MeetingNoId.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <App />,
          },
          {
            path: "/upcoming",
            element: <Upcoming />,
          },
          {
            path: "/previous",
            element: <Previous />,
          },
          {
            path: "/recordings",
            element: <Recordings />,
          },
          {
            path: "/personal-room",
            element: <PersonalRoom />,
          },
        ]
      },
      {
        path: "/meeting",
        element: <MeetingLayout />,
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
    ]
  }],
  { basename: import.meta.env.BASE_URL }
);

// document.body.style.backgroundColor = `${dark.bgColor}`;
document.body.classList.add('bg-dark-2');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

