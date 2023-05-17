"use client"

import { InventoryContext } from "@/context/InventoryContext"
import { useContext, useEffect, useState } from "react"

export default function ChracterStats() {

  const { equippedItems, equippedItems: { weapon, shield, greave, helm, armor, elixir } } = useContext(InventoryContext);

  const [baseStats, setBaseStats] = useState({});

  useEffect(() => {
    setBaseStats(prev => {
      return {
        ...prev,
        attack: (weapon ? 10 + weapon.stats.damage : 10),
        defense: (shield ? 10 + shield.stats.defense : 10),
        armor: (armor ? 10 + armor.stats.armor : 10) + (helm ? helm.stats.armor : 0) + (greave ? greave.stats.armor : 0),
      }
    })
  }, [equippedItems]);

  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      <p className="text-xl font-semibold">Name: Link</p>
      <p className="text-xl font-semibold">Attack: {baseStats.attack}</p>
      <p className="text-xl font-semibold">Defense: {baseStats.defense}</p>
      <p className="text-xl font-semibold">Armor: {baseStats.armor}</p>
    </div>
  )
}
