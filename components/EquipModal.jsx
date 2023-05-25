'use client'

import { InventoryContext } from '@/context/InventoryContext'
import React, { useContext } from 'react'
import TextAnimated from './TextAnimated'

const EquipModal = ({ data }) => {

  const { equippedItems, setEquippedItems } = useContext(InventoryContext)
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
  }
  const closeModal = () => {

  }
  const handleThrow = () => {

  }



  return (
    <div className='absolute translate-x-[100px] translate-y-[30px] z-50  p-2 rounded-sm'>
      <div onClick={handleClick} className="overflow-hidden flex text-xs white bg-[#292828] justify-center items-center w-[120px] h-[35px] border border-red-400 rounded-full">
        {
          data.name == equippedItems[data.category]?.name ? <TextAnimated text={'Unequip'}/>:  <TextAnimated text={'Equip'}/>
        }

      </div>
      <div onClick={handleThrow} className="overflow-hidden flex text-xs white bg-[#292828] justify-center items-center w-[120px] h-[35px] border border-red-400 rounded-full">
      
        <TextAnimated text={'Throw'}/>
      </div>
      <div onClick={closeModal} className="overflow-hidden flex text-xs white bg-[#292828] justify-center items-center w-[120px] h-[35px] border border-red-400 rounded-full">
       
        <TextAnimated text={'Cancel'}/>
      </div>
    </div>
  )
}

export default EquipModal