"use client"

import { createContext, useState } from "react";
import rawItems from "@/assets/items/items";

export const InventoryContext = createContext(null);

export default function InventoryContextProvider({ children }) {

  const [equippedItems, setEquippedItems] = useState({});
  const [items, setItems] = useState(rawItems)
  return (
    <InventoryContext.Provider value={{ equippedItems, setEquippedItems,items, setItems }}>
      {children}
    </InventoryContext.Provider>
  )
}

