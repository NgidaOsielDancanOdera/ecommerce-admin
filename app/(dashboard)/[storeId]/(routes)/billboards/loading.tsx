//This code exports a React component named Loading, 
//which is responsible for displaying a loading indicator. 
//It imports the Loader component from "@/components/ui/loader" 
//for rendering the loading animation. Within the component, 
//it returns a div element with CSS classes to center the loader 
//both vertically and horizontally within the viewport. 
//This loading component can be utilized to indicate to users 
//that content is being fetched or processed asynchronously.

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