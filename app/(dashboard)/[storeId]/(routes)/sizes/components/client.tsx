//Component Definition: The SizesClient component is defined as a functional component that receives data as a prop, representing an array of size data.

//Parameter Retrieval: It uses the useParams hook from next/navigation to retrieve the storeId parameter from the URL.

//Router Navigation: It uses the useRouter hook from next/navigation to access the router object for navigation.

//Rendering:

//It renders a heading (Heading) with the title "Sizes" and a description indicating the purpose of the section.
//It renders a button (Button) labeled "Add New" with a Plus icon. Clicking this button navigates the user to the page for adding a new size.
//It renders a separator (Separator) for visual separation.
//It renders a data table (DataTable) to display the size data. The columns for the table are defined by the columns array imported from the "./columns" file, and the data is provided by the data prop.
//It renders another heading with the title "API" and a description indicating API calls related to sizes.
//It renders another separator.
//It renders an API list (ApiList) to display API endpoints related to sizes. The entityName prop is set to "sizes", and the entityIdName prop is set to "sizeId".



"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, SizeColumn } from "./columns";

interface SizesClientProps {
  data: SizeColumn[];
}

export const SizesClient: React.FC<SizesClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Sizes (${data.length})`} description="Manage sizes for your products" />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/${params.storeId}`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};