'use client'

import { InventoryContext } from '@/context/InventoryContext'
import React, { useContext } from 'react'
import TextAnimated from './TextAnimated'
import { ModalContext } from './InventoryPool'

const EquipModal = ({ data }) => {
 

  const { equippedItems, setEquippedItems } = useContext(InventoryContext)
  const { setOpenModal, setItems } = useContext(ModalContext)


  const handleClick = () => {
    setEquippedItems(prev => {
      closeModal()
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
    setOpenModal(prev => {
      const holdPrev = { ...prev }
      holdPrev[data.name].isFocused = false
      holdPrev[data.name].isActive = false
      return holdPrev
    })

  }
  const handleThrow = () => {
    closeModal()
    if(equippedItems[data.category]?.name === data.name){
      setEquippedItems(prev => {
        const holdPrev = { ...prev }
        delete holdPrev[data.category];
        return holdPrev
      })
    }
    setItems( prev => {
 
      const holdPrev = {...prev}
      if(data.category === 'weapon' || data.category === 'shield'){
        holdPrev[data.category + 's'] = holdPrev[data.category + 's'].filter(e => e.name !== data.name)
      }else{
        holdPrev['armors'] = holdPrev['armors'].filter(e => e.name !== data.name)
      }
      return holdPrev
    })
    
  }



  return (
    <div className='absolute flex flex-col gap-4 bg-slate-800 translate-x-1/2 translate-y-1/2 z-50 p-4 border border-slate-600'>
      <div onClick={handleClick} className="overflow-hidden flex px-6 py-2 text-lg bg-slate-800 justify-center items-center w-full border border-slate-700 hover:border-slate-300">
        {
          data.name == equippedItems[data.category]?.name ? <TextAnimated text={'Unequip'} /> : <TextAnimated text={'Equip'} />
        }

      </div>
      <div onClick={handleThrow} className="overflow-hidden flex px-4 py-2 text-lg bg-slate-800 justify-center items-center w-full border border-slate-700 hover:border-slate-300">

        <TextAnimated text={'Throw'} />
      </div>
      <div onClick={closeModal} className="overflow-hidden flex px-4 py-2 text-lg bg-slate-800 justify-center items-center w-full border border-slate-700 hover:border-slate-300">

        <TextAnimated text={'Cancel'} />
      </div>
    </div>
  )
}

export default EquipModal