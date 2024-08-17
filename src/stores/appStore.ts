
import { create } from 'zustand'

interface DialogState {
  isMobileSideBarOpen: boolean,
  toggleMobileSideBar: () => void
}

const useAppStore = create<DialogState>()((set) => ({
    isMobileSideBarOpen: false,
    toggleMobileSideBar: () => {set((state) => ({ isMobileSideBarOpen: !state.isMobileSideBarOpen }))}
}))

export default useAppStore