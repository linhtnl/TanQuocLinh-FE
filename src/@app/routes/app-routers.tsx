
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/not_found/not_found";
import AppElement from "./app-element";
import AppRoute from "./app-element";
import routes from "./routes";

const AppRouter: React.FC = () => {

    return (
        <Router>
            <Routes>
                {routes.map((r) => (
                    <Route
                        key={r.path}
                        path={r.path}
                        element={
                            <AppElement
                                component={r.component}
                                isLayout={r.isLayout}
                                layout={r.layout}
                                authen={r.authen}
                                path={r.path}
                                roles={r.roles}
                            />
                        }
                    />
                ))}
                <Route path="*" element={<NotFoundPage />} />
                {/* <Route index element={<AppElement
                    component={HomePage}
                    isLayout={true}
                    layout={AuthenLayout}
                    authen={true}
                    path={'/'}
                    roles={[ROLE_ADMIN, ROLE_LOCATION_OWNER, ROLE_SERVICE_PROVIDER]} />} /> */}
            </Routes>
        </Router>
    );
};
export default AppRouter;
