//This code defines a React component called BillboardPage,
 //which serves as a page for viewing and editing billboard data. 
 //It imports the prismadb module from "@/lib/prismadb" for database
  //interaction and the BillboardForm component from "./components/billboard-form" 
  //for displaying and updating billboard information. The component retrieves the 
  //specific billboard data based on the billboardId provided in the URL parameters. 
  //It then renders the BillboardForm component with the retrieved billboard data as 
  //the initial values for editing. Overall, this component orchestrates the retrieval
   //and presentation of billboard data on a web page.


import prismadb from "@/lib/prismadb";

import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
  params
}: {
  params: { billboardId: string }
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId
    }
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
}

export default BillboardPage;