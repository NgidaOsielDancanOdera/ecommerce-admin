//This code defines a Next.js page component named CategoriesPage, 
//responsible for fetching and displaying category data for a specific store. 
//It imports the prismadb module from "@/lib/prismadb" for database interaction 
//and the format function from "date-fns" for formatting dates. Additionally, 
//it imports the CategoryColumn type from "./components/columns" and the 
//CategoriesClient component from "./components/client" for rendering the category data. 
//The component retrieves category data based on the storeId provided in the URL parameters, 
//including associated billboards. It then formats the category data and renders the CategoriesClient 
//component with the formatted category data. Overall, this page component facilitates the display 
//and management of category data within a web application.



import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { CategoryColumn } from "./components/columns"
import { CategoriesClient } from "./components/client";

const CategoriesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;