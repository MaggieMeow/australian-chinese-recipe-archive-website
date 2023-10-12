import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Store {
  interestedPage: number | null;
  setInterestedPage: (page: number | null) => void;

  isShelfOpen: boolean;
  setIsShelfOpen: (value: boolean) => void;
}

export const useStore = create<Store>()(
  immer((set) => ({
    interestedPage: null,
    setInterestedPage: (page) => {
      set((state) => {
        state.interestedPage = page;
      });
    },

    isShelfOpen: false,
    setIsShelfOpen: (value) => {
      set((state) => {
        state.isShelfOpen = value;
      });
    },
  }))
);
