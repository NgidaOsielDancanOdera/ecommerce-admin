//This code snippet defines a custom hook useActiveStore using Zustand, a small, fast, and scalable state management library for React. 

import { create } from 'zustand';

interface useActiveStoreInterface {
  id?: string;
  set: (id: string) => void;
  reset: () => void;
}

export const useActiveStore = create<useActiveStoreInterface>((set) => ({
  id: undefined,
  set: (id: string) => set({ id }),
  reset: () => set({ id: undefined }),
}));