import { create } from "zustand";
import { persist } from "zustand/middleware";
import { zustandStorage } from "../helpers/storage";

export const useApp = create(
  persist(
    (set) => ({
      paths: [],
      setPaths: (paths) => set({ paths }),
    }),
    {
      name: "app",
      storage: zustandStorage,
    }
  )
);
