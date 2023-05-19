"use client"
import { useState, useEffect } from "react"
import Armor from "../assets/images/armor.svg"
import Shield from "../assets/images/shield.svg"
import Sword from "../assets/images/sword.svg"
import Image from "next/image"


export default function CategoryButton({ selectedCategory, setSelectedCategory, name, changeCategory }) {

  const [icon, setIcon] = useState(null);

  const handleClick = (name) => {
    changeCategory(name);
    setSelectedCategory(name);
  }

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
    <button onClick={() => handleClick(name)} className={`p-2 rounded cursor-pointer ${selectedCategory === name ? "bg-slate-800" : "bg-slate-600"}`}>
      {icon && <Image src={icon} alt="" className="w-10 h-10" />}
    </button>
  )
}
