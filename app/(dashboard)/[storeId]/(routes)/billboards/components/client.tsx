//This code defines a React component called BillboardClient, 
//responsible for displaying and managing billboard data within a web application. 
//It imports modules such as Lucide icons for visual elements and Next.js 
//navigation utilities like useParams and useRouter. The component receives data, 
//an array of billboard items, and renders a heading indicating the number of billboards 
//and a button to add a new one. It also includes a DataTable component to display the 
//billboard data with search functionality based on the label. Additionally, it renders 
//an APIList component to show API calls related to billboards. Overall, this component 
//provides an interface for managing billboard data effectively.



"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, BillboardColumn } from "./columns";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store" />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/${params.storeId}`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};