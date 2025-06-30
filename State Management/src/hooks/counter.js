import { create } from "zustand";


const useCounterStore = create((set) => {
    return {
        count: 0,
        increment: () => { set(state => ({ count: state.count + 1 })) },
        decrement: () => {
            set(state => {
                return { count: state.count - 1 }
            })
        },
        
    }
})

export default useCounterStore;