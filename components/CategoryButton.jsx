"use client"
import { useState, useEffect } from "react"
import Armor from "../assets/images/armor.svg"
import Shield from "../assets/images/shield.svg"
import Sword from "../assets/images/sword.svg"
import Image from "next/image"


export default function CategoryButton({ name, changeCategory }) {

  const [icon, setIcon] = useState(null);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (name === "weapons") {
      setIcon(Sword);
    } else if (name === "shields") {
      setIcon(Shield);
    } else if (name === "armors") {
      setIcon(Armor);
    }
  }, [name]);

  return (
    <button onClick={() => changeCategory(name)} className={`p-2 rounded cursor-pointer ${selected && selected === name ? "bg-red-500":"bg-slate-600"}`}>
      {icon && <Image src={icon} alt="" className="w-10 h-10" />}
    </button>
  )
}
