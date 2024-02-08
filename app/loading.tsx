//The provided code defines a React component called Loading, 
//which displays a loader animation in the center of the screen. 
//This component is typically used to indicate that content is being 
//loaded or processed. It imports the Loader component from @/components/ui/loader 
//and renders it within a flex container to center it both vertically and 
//horizontally on the screen. The Loader component likely contains an animated 
//loading indicator, such as a spinner or progress bar, to visually convey to 
//the user that something is happening in the background.


"use client";

import { Loader } from "@/components/ui/loader";


const Loading = () => {
  return ( 
    <div className="flex h-full w-full items-center justify-center">
      <Loader />
    </div>
   );
}
 
export default Loading;