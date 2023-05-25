"use client"
import { useContext, useEffect, useState } from "react"
import Armor from "../assets/images/armor.svg"
import Shield from "../assets/images/shield.svg"
import Sword from "../assets/images/sword.svg"
import Image from "next/image"
import { InventoryContext } from "@/context/InventoryContext"



export default function ObjectDescription({ description }) {

  const [icon, setIcon] = useState(null);

  const [compare, setCompare] = useState(1)

  const {equippedItems} = useContext(InventoryContext)
  
  useEffect(() => {

    if (description.stats) {
      if (description.stats.type === "damage") {
        setIcon(Sword);
      } else if (description.stats.type === "defense") {
        setIcon(Shield);
      } else if (description.stats.type === "armor") {
        setIcon(Armor);
      }

      if(equippedItems[description.category]){
        let equippedValue = equippedItems[description.category].stats.damage ||
        equippedItems[description.category].stats.defense ||
        equippedItems[description.category].stats.armor 
        console.log(equippedValue);

        if(equippedValue < description.stats.value){
          setCompare(0)
        }else if(equippedValue < description.stats.value ){
          setCompare(2)
        }else { setCompare(1) }
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
            <p className={`border  px-2 py-1 ${compare === 0 ? 'border-red-300' : compare == 2 && 'border-green-400'}`}>{description.stats.value}</p>
            
            
            <IconArrowRightShort />

           {
            equippedItems[description.category] ?
             <p className={`border  px-2 py-1 ${compare === 0 ? 'border-red-300' : compare == 2 && 'border-green-400'}`}>
              {
              equippedItems[description.category].stats.damage ||
              equippedItems[description.category].stats.defense ||
              equippedItems[description.category].stats.armor 
              }</p> :
             <p className={`border  px-2 py-1 ${compare === 0 ? 'border-green-400' : compare == 2 && 'border-red-300'}`}>{10}</p>
           }
          </div>
          <p className="p-4 pt-0 bg-slate-600">{description.description}</p>
        </div>
      }
    </>
  )
}


function IconArrowRightShort(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="2em"
      width="2em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
      />
    </svg>
  );
}
