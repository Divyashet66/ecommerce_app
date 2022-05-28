

import {
    loginStart,
    loginFailure,
    loginSuccess
} from "./userRedux";
import {
    publicRequest
} from '../requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        console.log(user)
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};