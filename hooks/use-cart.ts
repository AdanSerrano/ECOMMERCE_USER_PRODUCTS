import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";
import { create } from "zustand";
import { toast } from "sonner";

interface CardStore {
    items: Product[]
    addItem: (data: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

export const useCart = create(persist<CardStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) return toast("item already in cart")


        set({ items: [...get().items, data] })

        toast.success("item added to cart.")
    },
    removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast.success("item Removed from the cart.")
    },
    removeAll: () => set({ items: [] })

}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))