import {create} from "zustand";
import axios from "axios";

 export let authStore = create((set)=>({

    
    message:{status:false},


    loginHandler : (email,password)=>{

       
            axios.post("http://localhost:8000/auth/signin", {
            
              password:password,
              email:email
            },{ withCredentials: true })
            .then((res)=>{
              
                set({message:res.data})
               
            })
            .catch((e)=>{
              console.log(e);
             
            })
    }

}))


