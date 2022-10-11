import create from 'zustand'

const useStore = create((set) => ({
  minute: "03",
  second: "00",
  counter: 180,
  setMinute: (val:string) => set((state:any) => ({minute: val})),
  setSecond: (val:string) => set((state:any) => ({second: val})),
  setCounter: (val:number) => set((state:any) => ({counter: val})),
}))

export default useStore;