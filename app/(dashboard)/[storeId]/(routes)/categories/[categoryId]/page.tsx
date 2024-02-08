//This code defines a Next.js page component named CategoryPage, 
//responsible for fetching and displaying category data for editing. 
//It imports the prismadb module from "@/lib/prismadb" for database 
//interaction and the CategoryForm component from "./components/category-form" 
//for rendering the category form. The component retrieves the specific category 
//data based on the categoryId provided in the URL parameters and the available 
//billboards for the specified store. It then renders the CategoryForm component 
//with the retrieved category data and the list of billboards. Overall, this page 
//component facilitates the editing of category data within a web application.


import prismadb from "@/lib/prismadb";

import { CategoryForm } from "./components/category-form";

const CategoryPage = async ({
  params
}: {
  params: { categoryId: string, storeId: string }
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId
    }
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    }
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
}

export default CategoryPage;