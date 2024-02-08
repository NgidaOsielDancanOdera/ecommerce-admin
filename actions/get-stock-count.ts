//This file defines getStockCount, a function that 
//asynchronously fetches the count of active products 
//in stock for a given store from a database using prismadb. 
//It filters products by store ID and ensures they are not archived (isArchived: false). 
//The function returns the stock count once obtained.


import prismadb from "@/lib/prismadb";

export const getStockCount = async (storeId: string) => {
  const stockCount = await prismadb.product.count({
    where: {
      storeId,
      isArchived: false,
    }
  });

  return stockCount;
};