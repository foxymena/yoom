import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import AppLayout from './AppLayout.tsx';
import App from './App.tsx';

import Upcoming from './Upcoming.tsx';
import Previous from './Previous.tsx';
import Recordings from './Recordings.tsx';
import PersonalRoom from './PersonalRoom.tsx';

import MeetingLayout from './MeetingLayout.tsx';
import Meeting from './Meeting.tsx';
import MeetingNoId from './MeetingNoId.tsx';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

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

const navi = (to: string): Promise<unknown> | void => {
  console.log('navi', to);
  return ;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider navigate={navi} publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)

