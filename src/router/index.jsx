import { createBrowserRouter } from "react-router-dom"
import * as uiScreens from "../ui"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <uiScreens.Home/>
  }
])