"use client"
import { useEffect, useState } from "react"
import Armor from "../assets/images/armor.svg"
import Shield from "../assets/images/shield.svg"
import Sword from "../assets/images/sword.svg"
import Image from "next/image"

export default function ObjectDescription({ description }) {

  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (description.stats) {
      if (description.stats.type === "damage") {
        setIcon(Sword);
      } else if (description.stats.type === "defense") {
        setIcon(Shield);
      } else if (description.stats.type === "armor") {
        setIcon(Armor);
      }
    }
  }, [description]);


  return (
    <>
      {
        description.description &&
        <div className="w-full border border-slate-500">
          <h3 className="p-4 bg-slate-900 font-semibold text-xl">{description.name}</h3>
          <div className="flex gap-4 p-4 bg-slate-600">
            {icon && <Image src={icon.src} alt="" width={20} height={20} />}
            <p className="border px-2 py-1">{description.stats.value}</p>
          </div>
          <p className="p-4 pt-0 bg-slate-600">{description.description}</p>
        </div>
      }
    </>
  )
}
