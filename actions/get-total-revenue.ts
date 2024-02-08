//This file defines getTotalRevenue, a function that asynchronously 
//calculates the total revenue for a specified store by querying the database.
 //It retrieves paid orders and their associated products, then sums up the 
 //prices to determine the total revenue. The function returns the total revenue once computed.

import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true
    },
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    }
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.orderItems.reduce((orderSum, item) => {
      // Removed .toFloat() method as 'price' is already a float in the database
      return orderSum + item.product.price;
    }, 0);
    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
