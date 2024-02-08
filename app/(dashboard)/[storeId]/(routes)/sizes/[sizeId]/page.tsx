//Import Statements: It imports the necessary modules and components, including prismadb for database operations and SizeForm for rendering the form.

//Page Function: The SizePage function receives route parameters as input. Specifically, it expects a sizeId parameter to identify the size to be edited. It uses this sizeId to fetch the corresponding size data from the database using prismadb.size.findUnique().

//Rendering: Inside the return statement, the page renders a SizeForm component, passing the fetched size data as initialData. This allows the SizeForm component to pre-fill the form fields with the existing size data when editing an existing size.

//HTML Structure: The page renders a div element with flex-col class, indicating a vertical layout. Within this div, there's another div with flex-1 space-y-4 p-8 pt-6 classes, which likely represents the main content area. Inside this content area, the SizeForm component is rendered.

//Export: Finally, the SizePage component is exported as the default export of the module.



import prismadb from "@/lib/prismadb";

import { SizeForm } from "./components/size-form";

const SizePage = async ({
  params
}: {
  params: { sizeId: string }
}) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId
    }
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}

export default SizePage;