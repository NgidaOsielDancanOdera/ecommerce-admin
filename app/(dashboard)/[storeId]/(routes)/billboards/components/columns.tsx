//This code exports a set of columns (columns) for displaying billboard 
//data in a table. Each column definition includes an accessor key to 
//access data, a header for display, and an optional cell component for 
//custom rendering. The BillboardColumn type specifies the structure of 
//the billboard data, including fields like ID, label, and creation date. 
//Additionally, it imports the CellAction component to render action buttons 
//for each billboard item, allowing users to perform actions such as editing or deleting. 
//These columns are intended for use with a table component from the @tanstack/react-table 
//library. Overall, this code provides a configuration for rendering billboard data in a 
//tabular format with associated action buttons.



"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type BillboardColumn = {
  id: string
  label: string;
  createdAt: string;
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];