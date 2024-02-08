//This code defines a Loading component that displays 
//a loader animation while content is being loaded. 
//It imports the Loader component from "@/components/ui/loader" 
//and renders it inside a div with flexbox styling to center it 
//both vertically and horizontally within its container. 
//Finally, it exports the Loading component as the default export.


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