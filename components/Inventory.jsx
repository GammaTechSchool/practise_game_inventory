"use client"
import { useState } from "react";
import ObjectDescription from "./ObjectDescription";
import InventoryPool from "./InventoryPool";
import CharacterStats from "./CharacterEquipement";


export default function Inventory({ items }) {

  const [description, setDescription] = useState({});

  return (
    <div className="w-full flex justify-center items-start gap-20">
      <InventoryPool rawItems={items} setDescription={setDescription} />
      <div className="w-1/2 flex flex-col justify-start items-center gap-8">
        <CharacterStats />
        <ObjectDescription description={description} />
      </div>
    </div>
  )
}
