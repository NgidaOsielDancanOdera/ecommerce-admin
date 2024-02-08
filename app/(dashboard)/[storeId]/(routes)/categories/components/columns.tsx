//This code defines columns for displaying category data 
//in a table. It imports ColumnDef from "@tanstack/react-table" 
//for defining column structures and CellAction for rendering actions
 //for each category item. The CategoryColumn type specifies the structure
  //of category data, including fields like ID, name, associated billboard label, 
  //and creation date. The columns array contains definitions for each column, 
  //including the accessor key to access data, header text for display, 
  //and optional cell component for custom rendering. Overall, 
  //these columns are intended for use with a table component to present 
  //category data effectively within a web application.


"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type CategoryColumn = {
  id: string
  name: string;
  billboardLabel: string;
  createdAt: string;
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({ row }) => row.original.billboardLabel,
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