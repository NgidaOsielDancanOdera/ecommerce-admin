//The ColorsPage component is responsible for fetching 
//color data from the database based on the provided store ID. 
//It uses the prismadb.color.findMany function to retrieve the 
//colors and orders them by their creation date in descending order. 
//Once the color data is fetched, it is formatted into the ColorColumn format, 
//which includes properties such as id, name, value, and createdAt. 
//The format function from the date-fns library is used to format the 
//creation date of each color. Finally, the formatted color data is passed 
//to the ColorClient component, which is responsible for rendering the colors 
//in a user-friendly interface. The ColorClient component displays the number 
//of colors and provides options to add new colors, view color details, 
//and perform other actions through its UI elements.




import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { ColorColumn } from "./components/columns"
import { ColorClient } from "./components/client";

const ColorsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;