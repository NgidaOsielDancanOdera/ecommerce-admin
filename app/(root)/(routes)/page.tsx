//This SetupPage component is responsible for triggering
 //the opening of a modal dialog for setting up a store. 
 //It utilizes the useStoreModal custom hook to access the modal 
 //state and functions. Inside the useEffect hook, it checks if 
 //the modal is not already open (isOpen is false), and if so, 
 //it calls the onOpen function to open the modal. The effect 
 //runs only when the isOpen state changes or when the onOpen 
 //function changes, ensuring that the modal is opened when needed.
  //Finally, the component returns null, indicating that it doesn't
   //render any visible content itself.









"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};
 
export default SetupPage;