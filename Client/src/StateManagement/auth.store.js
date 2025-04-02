import { create } from "zustand";
import axios from "axios";

export let authStore = create((set) => ({
    user: null,
    message: { status: false },

    loginHandler: (email, password) => {
        axios
            .post("http://localhost:8000/auth/signin", { email, password }, { withCredentials: true })
            .then((res) => {
                set({ message: res.data, user: res.data.user });
                authStore.getState().checkAuth(); 
            })
            .catch((e) => {
                console.log(e);
            });
    },

    checkAuth: () => {
        axios
            .get("http://localhost:8000/auth/check", { withCredentials: true })
            .then((res) => {
                set({ message: { status: res.data.status }, user: res.data.user });
            })
            .catch((e) => {
                set({ message: { status: false }, user: null });
            });
    },

    logoutHandler: () => {
        axios.post("http://localhost:8000/auth/logout", {}, { withCredentials: true })
            .then(() => {
                set({ user: null, message: { status: false } });
                authStore.getState().checkAuth();
                window.location.href = "/home";
            })
            .catch((e) => console.log("Logout failed", e));
    },
}));
