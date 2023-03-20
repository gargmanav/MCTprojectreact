import { configureStore } from "@reduxjs/toolkit";
import Userreducer from "../features/Userslice";

export default configureStore({
    reducer:{
        user:Userreducer,
        
    }
})