import { createBrowserRouter, RouterProvider } from "react-router"
import RegisterPage from "../module/auth/pages/RegisterPage"
import ProfilePage from "../module/auth/pages/ProfilePage"



const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    }
])

const AppRoutes = () => {
    return <RouterProvider router={router}/>
}

export default AppRoutes