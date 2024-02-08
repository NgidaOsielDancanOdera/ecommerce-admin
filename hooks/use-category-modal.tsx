//This code snippet defines a custom hook useCategoryModal using Zustand for managing the state related to a category modal. Here's a breakdown of its functionality:

import { create } from 'zustand';

interface useCategoryModalStore {
  isOpen: boolean;
  isEdit: boolean;
  editId?: string;
  onOpen: () => void;
  onEdit: (id: string) => void;
  onClose: () => void;
}

export const useCategoryModal = create<useCategoryModalStore>((set) => ({
  isOpen: false,
  isEdit: false,
  editId: undefined,
  onOpen: () => set({ isOpen: true }),
  onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
  onClose: () => set({ isOpen: false, isEdit: false, editId: undefined }),
}));