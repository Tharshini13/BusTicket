import { create } from "zustand";
import axios from "axios";

export let busStore = create((set) => ({
    busInfo: [], 
    bus: null,

    findbus: (userData) => {

        console.log(userData)

        axios.post("http://localhost:8000/bus/findbus", userData, { withCredentials: true })

            .then((res) => {

                set({ busInfo: res.data });

                console.log("Updated Bus Info:", res.data); 
            })

            .catch((e) => {
                console.error(e);
            });
    },

    singleBus : (id)=>{

        axios.get(`http://localhost:8000/bus/singlebus/${id}`)
        .then((res)=>{
            set({bus:res.data})
            
        })
        .catch((e)=>{
            alert("Error occured!")
            
        })

    }

    
}));
