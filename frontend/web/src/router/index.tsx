import { Navigate, createBrowserRouter } from "react-router-dom";
import { Attendance, Dashboard, Employee, Login, Register } from "../pages";
import routes from "./routes";
import Roles from "../pages/Organization/Roles";
import Department from "../pages/Organization/Department";
import DefaultLayout from "../layout/DefaultLayout";
import Landing from "../pages/Landing";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: routes.login(),
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            element: <DefaultLayout />,
            children: [
                {
                    path: routes.dashboard(),
                    element: <Dashboard />,
                },
                {
                    path: routes.attendance(),
                    element: <Attendance />,
                },
                {
                    path: routes.employee(),
                    element: <Employee />,
                },
                {
                    path: routes.roles(),
                    element: <Roles />,
                },
                {
                    path: routes.department(),
                    element: <Department />,
                },
                {
                    path: '*',
                    element: (
                        <Navigate
                            to={{
                                pathname: routes.login()
                            }}
                        />
                    ),
                },

            ],
        },
    ],
)