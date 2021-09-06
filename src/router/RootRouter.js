import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import DetailPage from "../pages/Detail/DetailPage";
import {AnimatePresence, AnimateSharedLayout} from "framer-motion";

export default function RootRouter() {
    return (
        <AnimateSharedLayout type="crossfade">
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>
                    <Route exact path={"/detail"}>
                        <AnimatePresence>
                            <DetailPage />
                        </AnimatePresence>
                    </Route>
                </Switch>
            </Router>
        </AnimateSharedLayout>
    )
}
