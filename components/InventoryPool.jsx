"use client"
import { createContext, useContext, useEffect, useState } from "react";
import InventoryObject from "./InventoryObject"
import CategoryButton from "./CategoryButton";
import { InventoryContext } from "@/context/InventoryContext";
import { fill } from "@/app/functions/functions";


export const ModalContext = createContext(null)

export default function InventoryPool({ items, setDescription }) {

    const [itemsToRender, setItemsToRender] = useState(fill(items.weapons));
    const [selectedCategory, setSelectedCategory] = useState("weapons");
    
    const { equippedItems, setEquippedItems } = useContext(InventoryContext);
    
    const changeCategory = (key) => {
        setItemsToRender(fill(items[key]));
    }
    
    
    const modalReference = (state) => {
        return [...state].filter(e => e).reduce((acc, e) => {
            acc[e.name] = {isFocused : false, isActive : false}
            return acc
        }, {
        })
    }
    const [openModal, setOpenModal] = useState(modalReference(itemsToRender))



    useEffect(() => {
        setOpenModal(modalReference(itemsToRender))
    }, [itemsToRender])

   
    return (
        <div className="w-1/2 max-w-[500px] flex flex-col justify-center items-center gap-8">
            <div className="w-full justify-center items-center flex gap-4">
                {Object.keys(items).map((key, i) => {
                    return <CategoryButton key={i} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} name={key} changeCategory={changeCategory} />
                })}
            </div>
            <ModalContext.Provider value={{ openModal, setOpenModal }}>
                <div className="w-full flex flex-wrap justify-center items-center gap-4">
                    {itemsToRender.map((item, i) => {
                        return <InventoryObject key={i} data={item} setDescription={setDescription} />
                    })}
                </div>
            </ModalContext.Provider>
        </div>

    )
}
