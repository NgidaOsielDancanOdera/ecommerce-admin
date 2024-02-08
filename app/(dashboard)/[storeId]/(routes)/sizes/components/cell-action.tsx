//Import Statements: It imports necessary modules and components such as axios for HTTP requests, various icons from lucide-react, useState hook from React, toast for displaying notifications, and useParams and useRouter from next/navigation for accessing route parameters and navigation methods, respectively.

//Component Definition: The CellAction component is defined as a functional component that receives data as a prop, which represents the data associated with the cell.

//State Management: It uses the useState hook to manage the state for the modal (open) and loading status (loading) of the action.

//Event Handlers:

//onConfirm: This function handles the delete action. It sends a DELETE request to the server to delete the size associated with the cell's data (data.id). Upon successful deletion, it displays a success toast and refreshes the page.
//onCopy: This function copies the size ID associated with the cell's data (data.id) to the clipboard and displays a success toast.
//Rendering:

//The component renders a dropdown menu (DropdownMenu) containing action items.
//Each action item (DropdownMenuItem) has an icon and a label representing the action (Copy, Update, Delete).
//Clicking on the action items triggers the corresponding event handlers (onCopy, navigation to update page, and opening the delete confirmation modal).
//AlertModal: It renders an AlertModal component, which is used to confirm the delete action. The modal is shown when the user clicks the delete action, and it displays a confirmation message with options to confirm or cancel the action.



"use client";

import axios from "axios";
import { useState } from "react";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { AlertModal } from "@/components/modals/alert-modal";

import { SizeColumn } from "./columns";

interface CellActionProps {
  data: SizeColumn;
}

export const CellAction: React.FC<CellActionProps> = ({
  data,
}) => {
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/sizes/${data.id}`);
      toast.success('Size deleted.');
      router.refresh();
    } catch (error) {
      toast.error('Make sure you removed all products using this size first.');
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success('Size ID copied to clipboard.');
  }

  return (
    <>
      <AlertModal 
        isOpen={open} 
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => onCopy(data.id)}
          >
            <Copy className="mr-2 h-4 w-4" /> Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/${params.storeId}/sizes/${data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setOpen(true)}
          >
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};