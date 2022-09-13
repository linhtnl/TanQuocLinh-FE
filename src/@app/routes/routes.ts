import { ReactNode } from "react";
import { LoginPage } from "../pages/login/login";
import { UnauthPage } from "../pages/unauth/unauth";

interface Route {
    component: React.FC;
    layout?: React.FC<{ children: ReactNode }>;
    path: string;
    isLayout: boolean;
    authen: boolean;
    breadcrumb: string;
    roles: string[];
}
const routes: Route[] = [
    {
        component: LoginPage,
        path: "/signin",
        isLayout: false,
        authen: false,
        breadcrumb: "",
        roles: [""]
    },
    {
        component: UnauthPage,
        path: "/unauth",
        isLayout: false,
        authen: true,
        breadcrumb: "",
        roles: [""]
    },
];

export default routes;
