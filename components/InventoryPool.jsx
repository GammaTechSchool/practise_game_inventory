"use client"
import { useContext, useState } from "react";
import InventoryObject from "./InventoryObject"
import CategoryButton from "./CategoryButton";
import { InventoryContext } from "@/context/InventoryContext";

export default function InventoryPool({ items, setDescription }) {

    const [itemsToRender, setItemsToRender] = useState(items.weapons);
    const {equippedItems, setEquippedItems} = useContext(InventoryContext);

    const changeCategory = (key) => {
        setItemsToRender(items[key]);
    }

    return (
        <div className="w-1/2 max-w-[500px] flex flex-col justify-center items-center gap-8">
            <div className="w-full justify-center items-center flex gap-4">
                {Object.keys(items).map((key, i) => {
                    return <CategoryButton key={i} name={key} changeCategory={changeCategory} />
                })}
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-4">
                {itemsToRender.map((item, i) => {
                    return <InventoryObject key={i} data={item} setDescription={setDescription} equippedItems={equippedItems} setEquippedItems={setEquippedItems} />
                })}
            </div>
        </div>

    )
}
