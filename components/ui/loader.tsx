//This code defines a Loader component that renders a spinning loader using the ClipLoader component from the react-spinners library.

"use client";

import { ClipLoader } from "react-spinners";

export const Loader = () => {
  return <ClipLoader color="#3498db" size={50} />
};