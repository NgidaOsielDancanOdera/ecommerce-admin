//The ToastProvider component serves as a wrapper for the Toaster component provided by the react-hot-toast library. 

"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return ( 
    <Toaster />
   );
};