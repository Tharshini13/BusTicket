import { create } from "zustand";
import axios from "axios";
import { apiEndpoint } from "../Data";

export let authStore = create((set) => ({
    user: null,
    message: { status: false, msg: "" },  // ✅ Ensure msg is initialized
    signupMsg: null,

    loginHandler: (email, password, navigate) => {  // ✅ Accept navigate
        axios.post(`${apiEndpoint}/auth/signin`, { email, password }, { withCredentials: true })
            .then((res) => {
                set({
                    message: { status: true, msg: res.data.msg },
                    user: res.data.user
                });
                authStore.getState().checkAuth();
                console.log(res.data);
                navigate("/home");  // ✅ Redirect to home after login
            })
            .catch((e) => {
                set({
                    message: { status: false, msg: "Login failed. Please try again." }
                });
                console.log(e);
            });
    },

    checkAuth: () => {
        axios.get(`${apiEndpoint}/auth/check`, { withCredentials: true })
            .then((res) => {
                set({ message: { status: res.data.status }, user: res.data.user });
            })
            .catch(() => {
                set({ message: { status: false }, user: null });
            });
    },

    logoutHandler: (navigate) => {  // ✅ Accept navigate for logout
        axios.post(`${apiEndpoint}/auth/logout`, {}, { withCredentials: true })
            .then(() => {
                set({ user: null, message: { status: false } });
                authStore.getState().checkAuth();
                navigate("/login");  // ✅ Redirect to login after logout
            })
            .catch((e) => console.log("Logout failed", e));
    },
}));
