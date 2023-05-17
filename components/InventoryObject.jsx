import Image from "next/image"
import { useEffect, useState } from "react";

export default function InventoryObject({ data, setDescription, equippedItems, setEquippedItems }) {


  const handleClick = () => {

    setEquippedItems(prev => {
      if (prev[data.category]?.name === data.name) {
        const holdPrev = { ...prev }
        delete holdPrev[data.category];
        return holdPrev
      } else {
        return {
          ...prev,
          [data.category]: data
        }
      }
    });

    setDescription(prev => {
      if (prev.name === data.name) {
        return {}
      } else {
        return {
          name: data.name,
          description: data.description,
          stats: data.stats
        }
      }
    });
  }

  return (
    <div className={`w-[100px] h-[100px] flex justify-center items-center border ${equippedItems[data.category]?.name === data.name ? "border-red-500" : "border-slate-500"} cursor-pointer`} onClick={handleClick}>
      {
        data.category === "elixir" ?
          <img src={data.icon} alt="" className="h-[90%]" />
          :
          <Image
            src={data.icon}
            width={100}
            height={100}
            alt="Alt"
          />
      }

    </div>
  )
}
