import React, {useContext} from 'react';
import {Routes} from "react-router-dom";
import { Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes} from "../Config/routes";
import PageNotFind404 from "./PageNotFind404";
import Login from "./Login";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element} exact={true}/>
                )}
                <Route path="*" element={<PageNotFind404/>} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element} exact={true}/>
                )}
                <Route path="*" element={<Login/>} />
            </Routes>
        )
};

export default AppRouter;