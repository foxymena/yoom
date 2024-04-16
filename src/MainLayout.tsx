import { Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function MainLayout() {
  const navigate = useNavigate();
  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorText: "#FFF",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#FFF",
        },
        layout: {
          logoImageUrl: `${import.meta.env.BASE_URL}/icons/yoom-logo.svg`,
          socialButtonsVariant: "iconButton",
        }
      }}
    >
      <Outlet />
    </ClerkProvider>
  )
}

export default MainLayout
