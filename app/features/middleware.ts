import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";

const authMiddleware: Middleware = (store: MiddlewareAPI) => (next) => (action) => {
    const actions = authSlice.actions;
    if (actions.setUser.match(action)) {
        localStorage.setItem('isAuthenticated', 'true');
    } else if (actions.setIsLoggedIn.match(action)) {
        localStorage.setItem('isAuthenticated', 'false');
    }
    return next(action);
};

export default authMiddleware;