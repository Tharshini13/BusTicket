import { create } from "zustand";
import axios from "axios";

export let busStore = create((set) => ({
    busInfo: [], // Initial state

    findbus: (userData) => {

        console.log(userData)
        axios.post("http://localhost:8000/bus/findbus", userData, { withCredentials: true })
            .then((res) => {
                set({ busInfo: res.data }); // ✅ Correct way to update state

                console.log("Updated Bus Info:", res.data); // ✅ Log the response instead of busInfo
            })
            .catch((e) => {
                console.error("Error:", e.response?.data || e.message);
            });
    }
}));
