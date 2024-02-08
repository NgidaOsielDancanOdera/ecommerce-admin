//This code defines a Next.js page component named BillboardsPage, 
//responsible for fetching and displaying billboard data for a specific store. 
//It imports modules such as format from "date-fns" for date formatting and 
//prismadb for database interaction. Additionally, it imports the BillboardClient 
//component for rendering billboard data. Within the component, it asynchronously 
//retrieves billboard data from the database using the provided store ID. 
//The retrieved data is then formatted, converting the creation date into a 
//more readable format using the format function. Finally, the BillboardClient 
//component is rendered with the formatted billboard data. Overall, this page 
//component facilitates the presentation of billboard data within a web application.


import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { BillboardColumn } from "./components/columns"
import { BillboardClient } from "./components/client";

const BillboardsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;