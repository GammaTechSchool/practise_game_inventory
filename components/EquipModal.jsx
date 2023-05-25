'use client'

import { InventoryContext } from '@/context/InventoryContext'
import React, { useContext } from 'react'

const EquipModal = ({data}) => {

    const {equippedItems, setEquippedItems} = useContext(InventoryContext)
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
    
        // setDescription(prev => {
        //   if (equippedItems[data.category]?.name === data.name) {
        //     return {}
        //   } else {
        //     return {
        //       name: data.name,
        //       description: data.description,
        //       stats: {
        //         type: Object.keys(data.stats)[0],
        //         value: data.stats[Object.keys(data.stats)[0]]
        //       }
        //     }
        //   }
        // });
        
      }
    

    
    return <>
        <div onClick={handleClick} className= "absolute flex justify-center w-[100px] h-[50px] border border-red-400 rounded-full translate-x-[70px] translate-y-[30px] z-50">
    {
        data.name == equippedItems[data.category]?.name ? 'Unequip' : 'Equip'
    }
        </div>
    </>
}

export default EquipModal