import Image from "next/image"
import { useContext, useState } from "react";
import EquipModal from "./EquipModal";
import { ModalContext } from "./InventoryPool";
import SelectedAnimation from "./SelectedAnimation";
import { InventoryContext } from "@/context/InventoryContext";

export default function InventoryObject({ data, setDescription }) {
  const { openModal, setOpenModal } = useContext(ModalContext)
  const { equippedItems } = useContext(InventoryContext)
  


  const handleFirstClick = () => {
    setDescription(() => {
        return {
          name: data.name,
          category : data.category,
          description: data.description,
          stats: {
            type: Object.keys(data.stats)[0],
            value: data.stats[Object.keys(data.stats)[0]]
          }
        }
    });
  }





  return (
    <>

      {
        openModal[data?.name] ? <div className={`relative w-[100px] h-[100px] flex justify-center items-center border ${openModal[data.name].isFocused ? "border-[rgba(255, 255, 255, 0.5)] shadow-selected" : "border-slate-500 shadow-object-cell"} cursor-pointer`} onClick={
          () => {
            setOpenModal(prev => {

              const holdPrev = { ...prev }
              if (holdPrev[data.name].isFocused) {
                holdPrev[data.name].isActive = true
              } else {
                for (let key in holdPrev) {
                  if (key === data.name) {
                    holdPrev[key].isFocused = true
                    handleFirstClick()
                  } else {
                    holdPrev[key].isFocused = false;
                    holdPrev[key].isActive = false;
                  }
                }
              }
              return holdPrev
            })
          }
        }
        >

          <Image
            src={data.icon}
            width={100}
            height={100}
            alt="Alt"
          />
          <div className="absolute  bottom-0  grid place-content-center italic right-2 translate-x-2 translate-y-2 w-9 h-6 border bg-slate-700 border-slate-500">
            {data.stats.damage || data.stats.defense || data.stats.armor}
          </div>

          {
            openModal[data.name].isFocused && <SelectedAnimation />
          }
          {
            openModal[data.name].isActive && <EquipModal data={data}/>
          }

        </div> : <div className={`relative w-[100px] h-[100px] flex justify-center items-center border border-slate-500 shadow-object-cell cursor-pointer`} >



        </div>
      }





    </>
  )
}


