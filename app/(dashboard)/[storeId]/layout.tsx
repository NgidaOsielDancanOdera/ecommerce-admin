//The DashboardLayout component ensures that the user is authenticated
 //and has access to the specified store before rendering the dashboard content. 
 //It fetches store information based on the storeId and userId, and if successful, 
 //it renders the navigation bar (Navbar) and the children (dashboard content) inside the layout. 
 //If authentication or access fails, it redirects the user accordingly.


import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import Navbar from '@/components/navbar'
import prismadb from '@/lib/prismadb';

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({ 
    where: {
      id: params.storeId,
      userId,
    }
   });

  if (!store) {
    redirect('/');
  };

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};