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
            })
            .catch((e) => {
                console.log(e);
            });
    },

    checkAuth: () => {
        axios
            .get("http://localhost:8000/auth/check", { withCredentials: true })
            .then((res) => {
                if (res.data.status) {
                    set({ message: { status: true }, user: res.data.user });
                } else {
                    set({ message: { status: false }, user: null });
                }
            })
            .catch((e) => {
                console.log("Auth check failed", e);
                set({ message: { status: false }, user: null });
            });
    },

    logoutHandler: () => {
        axios.post("http://localhost:8000/auth/logout", {}, { withCredentials: true }).then(() => {
            set({ user: null, message: { status: false } });
        });
    },
    
}));
