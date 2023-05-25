"use client"

import { createContext, useState } from "react";

export const InventoryContext = createContext(null);

export default function InventoryContextProvider({ children }) {

  const [equippedItems, setEquippedItems] = useState({});

  return (
    <InventoryContext.Provider value={{ equippedItems, setEquippedItems }}>
      {children}
    </InventoryContext.Provider>
  )
}

