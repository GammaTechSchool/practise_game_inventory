import { InventoryContext } from '@/context/InventoryContext'
import Image from 'next/image';
import React, { useContext } from 'react'

export default function CharacterEquipement() {

    const { equippedItems, setEquippedItems } = useContext(InventoryContext);

    return (
        <div className='w-full max-w-[300px]'>
            <div className='grid grid-cols-3 grid-rows-3 gap-y-8'>
                <div></div>
                <div className='w-16 h-16 bg-slate-800 border border-slate-600'>
                    {equippedItems.helm ?
                        <Image
                            src={equippedItems.helm.icon}
                            width={64}
                            height={64}
                            alt=""
                        />
                        :
                        ""}
                </div>
                <div>
                </div>
                <div className='row-start-2 w-16 h-16 bg-slate-800 border border-slate-600'>
                {equippedItems.weapon ?
                        <Image
                            src={equippedItems.weapon.icon}
                            width={64}
                            height={64}
                            alt=""
                        />
                        :
                        ""}
                </div>
                <div className='col-start-2 row-start-2 w-16 h-16 bg-slate-800 border border-slate-600'>
                {equippedItems.armor ?
                        <Image
                            src={equippedItems.armor.icon}
                            width={64}
                            height={64}
                            alt=""
                        />
                        :
                        ""}
                </div>
                <div className='col-start-3 row-start-2 w-16 h-16 bg-slate-800 border border-slate-600'>
                {equippedItems.shield ?
                        <Image
                            src={equippedItems.shield.icon}
                            width={64}
                            height={64}
                            alt=""
                        />
                        :
                        ""}
                </div>
                <div></div>
                <div className='col-start-2 row-start-3 w-16 h-16 bg-slate-800 border border-slate-600'>
                {equippedItems.greave ?
                        <Image
                            src={equippedItems.greave.icon}
                            width={64}
                            height={64}
                            alt=""
                        />
                        :
                        ""}
                </div>
            </div>
        </div>

    )
}
