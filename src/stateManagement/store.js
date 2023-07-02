import { create } from "zustand";

const useMentoringStore = create((set) => ({
    notifCount: 0,
    increaseNotif: () => set((state => ({ notifCount: state.notifCount + 1 }))),
    decreaseNotif: () => set({ notifCount: 0 }),
}))

export default useMentoringStore;