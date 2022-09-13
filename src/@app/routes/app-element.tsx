import React from "react";
import { ReactNode } from "react";
import { ACCESS_TOKEN } from "../constants/key";
import { LoginPage } from "../pages/login/login";
import { UnauthPage } from "../pages/unauth/unauth";
import { localStorageGetReduxState } from "../services/localstorage_service";
interface Props {
    component: React.FC;
    layout?: React.FC<{ children: ReactNode }>;
    isLayout: boolean;
    authen: boolean;
    path: string;
    roles: string[]
}
const AppElement: React.FC<Props> = (props) => {
    const {
        component: Component,
        layout: Layout,
        isLayout = false,
        authen,
        path,
        roles
    } = props;
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    sessionStorage.setItem("PATH", path);
    console.log(access_token)
    if (!access_token) {
        return <LoginPage />;
    }
    if (!access_token && authen) {
        if (path === "/home-page") {
            return <LoginPage />;
        }
        return <UnauthPage />;
    }
    console.log(access_token && authen)
    if (access_token && authen) {
        const role = localStorageGetReduxState().auth.role;
        console.log("role app-element: " + role);
        if (roles) {
            if (!roles.includes(role)) {
                return <UnauthPage />;
            }
        }
    }
    return isLayout && Layout ? (
        <Layout>
            <Component />
        </Layout>
    ) : (
        <Component />
    );
};
export default AppElement;
