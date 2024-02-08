//This file contains a function named getSalesCount, 
//which retrieves the count of paid orders for a specific store from a database. 
//It utilizes the prismadb module to connect to the database and query the orders table. 
//By filtering orders based on the provided store ID and ensuring they are paid,
 //it accurately determines the total number of sales. 
 //This function is designed to be asynchronous, 
 //using await to pause execution until the count is retrieved,
  //and then returns the sales count.


import prismadb from "@/lib/prismadb";

export const getSalesCount = async (storeId: string) => {
  const salesCount = await prismadb.order.count({
    where: {
      storeId,
      isPaid: true
    },
  });

  return salesCount;
};